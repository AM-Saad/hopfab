import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import {
  FilePondFile,
  FileOrigin,
  FilePondInitialFile,
  FilePondErrorDescription,
} from "filepond";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { BlobServiceClient } from "@azure/storage-blob";
import { TransferProgressEvent } from "@azure/core-http";
import { AbortController } from "@azure/abort-controller";
import { Dictionary } from "@hopfab/collections";
import { get } from "@hopfab/http";
import { isImage, getImageSize } from "@hopfab/image";
import { utoa } from "@hopfab/string";

import "filepond/dist/filepond.min.css";

type DataProps = {
  fileUploadUrl: string;
  blobStorageUrl: string;
  containerName: string;
  required: boolean;
  allowMultiple: boolean;
  maxFiles: number | null;
  allowFileTypeValidation: boolean;
  acceptedFileTypes: string[];
  allowFileSizeValidation: boolean;
  maxFileSize: string | null;
  files: FilePondInitialFile[];
  setFiles: any;
};

const getFilePondInitialFile = (
  source: string,
  origin: "input" | "limbo" | "local" | FileOrigin,
  file: File
): FilePondInitialFile => {
  let type;
  if (origin === FileOrigin.INPUT) {
    type = "input";
  }
  if (origin === FileOrigin.LIMBO) {
    type = "limbo";
  }
  if (origin === FileOrigin.LOCAL) {
    type = "local";
  }

  return {
    source: source,
    options: {
      type: type,
      file: {
        name: file.name,
        size: file.size,
        type: file.type,
      },
    },
  };
};

const getFilePondInitialFileFromFilePondFile = (file: FilePondFile) => {
  return getFilePondInitialFile(file.serverId, file.origin, file.file);
};

registerPlugin(FilePondPluginFileValidateSize, FilePondPluginFileValidateType);

const FileUpload: React.FC<DataProps> = ({
  fileUploadUrl,
  blobStorageUrl,
  containerName,
  required,
  allowMultiple,
  maxFiles,
  allowFileTypeValidation,
  acceptedFileTypes,
  allowFileSizeValidation,
  maxFileSize,
  files,
  setFiles,
}) => {
  const [rawFiles, setRawFiles] = useState<
    (FilePondInitialFile | FilePondFile)[]
  >(files);

  const [filePondConfig] = useState({
    server: {
      process: (fieldName, file, metadata, load, error, progress, abort) => {
        const blobName = metadata["blobName"];

        const controller = new AbortController();

        const params = new Map<string, string>();
        params.set("containerName", containerName);
        params.set("blobName", blobName);

        const headers = new Headers();
        headers.append("Content-Type", "application/json; charset=utf-8");

        (async () => {
          let sasTokenResult = null;
          try {
            sasTokenResult = await get<{ token: string }>(
              `${fileUploadUrl}/getSasToken`,
              {
                params,
                headers,
              }
            );
          } catch {
            throw new Error(
              "Une erreur est survenue en essayant de télécharger le fichier"
            );
          }

          const blobServiceClient = new BlobServiceClient(
            `${blobStorageUrl}?${sasTokenResult?.token}`
          );

          const containerClient = blobServiceClient.getContainerClient(
            containerName
          );
          const blockBlobClient = containerClient.getBlockBlobClient(blobName);

          const metadata: Dictionary<string> = {
            filename: utoa(file.name), // Metadatas only accepts ASCII characters so we encode the name in base64
          };

          if (isImage(file)) {
            const dimensions = await getImageSize(file);
            metadata.width = dimensions.width.toString();
            metadata.height = dimensions.height.toString();
          }

          try {
            await blockBlobClient.uploadData(file, {
              metadata: metadata,
              blobHTTPHeaders: {
                blobContentType: file.type,
              },
              onProgress: (progressEvent: TransferProgressEvent) => {
                // Should call the progress method to update the progress to 100% before calling load
                // Setting computable to false switches the loading indicator to infinite mode
                progress(true, progressEvent.loadedBytes, file.size);
              },
              abortSignal: controller.signal,
            });
          } catch {
            throw new Error(
              "Une erreur est survenue en essayant de télécharger le fichier"
            );
          }

          load(
            `${blobStorageUrl}/${containerName}/${encodeURIComponent(blobName)}`
          );
        })().catch((e: Error) => {
          error(e.message);
        });

        // Should expose an abort method so the request can be cancelled
        return {
          abort: () => {
            // This function is entered if the user has tapped the cancel button
            controller.abort();

            // Let FilePond know the request has been cancelled
            abort();
          },
        };
      },
    },
    labelDecimalSeparator: ",",
    labelThousandsSeparator: " ",

    labelIdle: allowMultiple
      ? `Déposez vos fichiers ou <span class="filepond--label-action">Choisir</span>`
      : 'Déposez votre fichier ou <span class="filepond--label-action">Choisir</span>',
    labelInvalidField: "Le champ contient des fichiers invalides",
    labelFileWaitingForSize: "En attente de la taille",
    labelFileSizeNotAvailable: "Taille non disponible",
    labelFileCountSingular: "ficher dans la liste",
    labelFileCountPlural: "fichiers dans la liste",
    labelFileLoading: "Chargement",
    labelFileAdded: "Ajouté", // assistive only
    labelFileLoadError: "Erreur pendant le chargement",
    labelFileRemoved: "Supprimé", // assistive only
    labelFileRemoveError: "Erreur pendant la suppression",
    labelFileProcessing: "Téléchargement",
    labelFileProcessingComplete: "Téléchargement terminé",
    labelFileProcessingAborted: "Téléchargement annulé",
    labelFileProcessingError: "Erreur durant le téléchargement",
    labelFileProcessingRevertError: `Erreur durant l'annulation`,

    labelTapToCancel: "cliquer pour annuler",
    labelTapToRetry: "cliquer pour réessayer",
    labelTapToUndo: "cliquer pour supprimer",

    labelButtonRemoveItem: "Supprimer",
    labelButtonAbortItemLoad: "Annuler",
    labelButtonRetryItemLoad: "Réessayer",
    labelButtonAbortItemProcessing: "Annuler",
    labelButtonUndoItemProcessing: "Défaire",
    labelButtonRetryItemProcessing: "Réessayer",
    labelButtonProcessItem: "Télécharger",
    credits: [],
  });
  const [filePondFileValidationTypeConfig] = useState({
    allowFileTypeValidation: allowFileTypeValidation,
    acceptedFileTypes: acceptedFileTypes,
    labelFileTypeNotAllowed: "Fichier de type invalide",
    fileValidateTypeLabelExpectedTypes:
      acceptedFileTypes.length > 1
        ? "Attend {allButLastType} ou {lastType}"
        : "Attend {lastType}",
  });
  const [filePondFileValidationSizeConfig] = useState({
    allowFileSizeValidation: allowFileSizeValidation,
    maxFileSize: maxFileSize,
    maxTotalFileSize: null,
    labelMaxFileSizeExceeded: "Le fichier est trop gros",
    labelMaxFileSize: "La taille maximale de fichier est de {filesize}",
    labelMaxTotalFileSizeExceeded: "Les fichiers sont trop gros",
    labelMaxTotalFileSize: "La taille maximale des fichiers est de {filesize}",
  });

  const handleAddfile = (
    error: FilePondErrorDescription | null,
    file: FilePondFile
  ) => {
    if (error) return;

    // On génère un nom de fichier seulement si un fichier est ajouté par l'utilisateur
    if (file.origin === FileOrigin.INPUT) {
      file.setMetadata("blobName", `${new Date().getTime()}-${file.filename}`);
    }
  };
  const handleProcessfile = (
    error: FilePondErrorDescription | null,
    file: FilePondFile
  ) => {
    if (error) return;

    if (file.origin === FileOrigin.INPUT) {
      file.setMetadata("customServerId", file.serverId, true);

      setFiles([...files, getFilePondInitialFileFromFilePondFile(file)]);
    }
  };
  const handleActivatefile = (file: FilePondFile) => {
    // On permet de télécharger le fichier seulement si il a été stocké de manière permanente
    if (file.source !== null && typeof file.source === "string") {
      window.open(file.source);
    } else if (file.serverId !== null) {
      window.open(file.serverId);
    }
  };
  const handleRemovefile = (
    error: FilePondErrorDescription | null,
    file: FilePondFile
  ) => {
    if (error) return;

    setRawFiles(oldRawFiles => [
      ...oldRawFiles.filter(f => (f as FilePondFile).id !== file.id),
    ]);
    setFiles([
      ...files.filter(f => f.source !== file.getMetadata("customServerId")),
    ]);
  };

  return (
    <FilePond
      name="files"
      required={required}
      allowMultiple={allowMultiple}
      maxFiles={maxFiles}
      files={rawFiles as FilePondInitialFile[]}
      onupdatefiles={setRawFiles as any}
      onaddfile={handleAddfile}
      onprocessfile={handleProcessfile}
      onactivatefile={handleActivatefile}
      onremovefile={handleRemovefile}
      {...filePondConfig}
      {...filePondFileValidationSizeConfig}
      {...filePondFileValidationTypeConfig}
    />
  );
};

export default FileUpload;

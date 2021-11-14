"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_filepond_1 = require("react-filepond");
const filepond_1 = require("filepond");
const filepond_plugin_file_validate_size_1 = require("filepond-plugin-file-validate-size");
const filepond_plugin_file_validate_type_1 = require("filepond-plugin-file-validate-type");
const storage_blob_1 = require("@azure/storage-blob");
const abort_controller_1 = require("@azure/abort-controller");
const http_1 = require("@hopfab/http");
const image_1 = require("@hopfab/image");
const string_1 = require("@hopfab/string");
require("filepond/dist/filepond.min.css");
const getFilePondInitialFile = (source, origin, file) => {
    let type;
    if (origin === filepond_1.FileOrigin.INPUT) {
        type = "input";
    }
    if (origin === filepond_1.FileOrigin.LIMBO) {
        type = "limbo";
    }
    if (origin === filepond_1.FileOrigin.LOCAL) {
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
const getFilePondInitialFileFromFilePondFile = (file) => {
    return getFilePondInitialFile(file.serverId, file.origin, file.file);
};
react_filepond_1.registerPlugin(filepond_plugin_file_validate_size_1.default, filepond_plugin_file_validate_type_1.default);
const FileUpload = ({ fileUploadUrl, blobStorageUrl, containerName, required, allowMultiple, maxFiles, allowFileTypeValidation, acceptedFileTypes, allowFileSizeValidation, maxFileSize, files, setFiles, }) => {
    const [rawFiles, setRawFiles] = react_1.useState(files);
    const [filePondConfig] = react_1.useState({
        server: {
            process: (fieldName, file, metadata, load, error, progress, abort) => {
                const blobName = metadata["blobName"];
                const controller = new abort_controller_1.AbortController();
                const params = new Map();
                params.set("containerName", containerName);
                params.set("blobName", blobName);
                const headers = new Headers();
                headers.append("Content-Type", "application/json; charset=utf-8");
                (() => __awaiter(void 0, void 0, void 0, function* () {
                    let sasTokenResult = null;
                    try {
                        sasTokenResult = yield http_1.get(`${fileUploadUrl}/getSasToken`, {
                            params,
                            headers,
                        });
                    }
                    catch (_a) {
                        throw new Error("Une erreur est survenue en essayant de télécharger le fichier");
                    }
                    const blobServiceClient = new storage_blob_1.BlobServiceClient(`${blobStorageUrl}?${sasTokenResult === null || sasTokenResult === void 0 ? void 0 : sasTokenResult.token}`);
                    const containerClient = blobServiceClient.getContainerClient(containerName);
                    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
                    const metadata = {
                        filename: string_1.utoa(file.name), // Metadatas only accepts ASCII characters so we encode the name in base64
                    };
                    if (image_1.isImage(file)) {
                        const dimensions = yield image_1.getImageSize(file);
                        metadata.width = dimensions.width.toString();
                        metadata.height = dimensions.height.toString();
                    }
                    try {
                        yield blockBlobClient.uploadData(file, {
                            metadata: metadata,
                            blobHTTPHeaders: {
                                blobContentType: file.type,
                            },
                            onProgress: (progressEvent) => {
                                // Should call the progress method to update the progress to 100% before calling load
                                // Setting computable to false switches the loading indicator to infinite mode
                                progress(true, progressEvent.loadedBytes, file.size);
                            },
                            abortSignal: controller.signal,
                        });
                    }
                    catch (_b) {
                        throw new Error("Une erreur est survenue en essayant de télécharger le fichier");
                    }
                    load(`${blobStorageUrl}/${containerName}/${encodeURIComponent(blobName)}`);
                }))().catch((e) => {
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
        labelFileAdded: "Ajouté",
        labelFileLoadError: "Erreur pendant le chargement",
        labelFileRemoved: "Supprimé",
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
    const [filePondFileValidationTypeConfig] = react_1.useState({
        allowFileTypeValidation: allowFileTypeValidation,
        acceptedFileTypes: acceptedFileTypes,
        labelFileTypeNotAllowed: "Fichier de type invalide",
        fileValidateTypeLabelExpectedTypes: acceptedFileTypes.length > 1
            ? "Attend {allButLastType} ou {lastType}"
            : "Attend {lastType}",
    });
    const [filePondFileValidationSizeConfig] = react_1.useState({
        allowFileSizeValidation: allowFileSizeValidation,
        maxFileSize: maxFileSize,
        maxTotalFileSize: null,
        labelMaxFileSizeExceeded: "Le fichier est trop gros",
        labelMaxFileSize: "La taille maximale de fichier est de {filesize}",
        labelMaxTotalFileSizeExceeded: "Les fichiers sont trop gros",
        labelMaxTotalFileSize: "La taille maximale des fichiers est de {filesize}",
    });
    const handleAddfile = (error, file) => {
        if (error)
            return;
        // On génère un nom de fichier seulement si un fichier est ajouté par l'utilisateur
        if (file.origin === filepond_1.FileOrigin.INPUT) {
            file.setMetadata("blobName", `${new Date().getTime()}-${file.filename}`);
        }
    };
    const handleProcessfile = (error, file) => {
        if (error)
            return;
        if (file.origin === filepond_1.FileOrigin.INPUT) {
            file.setMetadata("customServerId", file.serverId, true);
            setFiles([...files, getFilePondInitialFileFromFilePondFile(file)]);
        }
    };
    const handleActivatefile = (file) => {
        // On permet de télécharger le fichier seulement si il a été stocké de manière permanente
        if (file.source !== null && typeof file.source === "string") {
            window.open(file.source);
        }
        else if (file.serverId !== null) {
            window.open(file.serverId);
        }
    };
    const handleRemovefile = (error, file) => {
        if (error)
            return;
        setRawFiles(oldRawFiles => [
            ...oldRawFiles.filter(f => f.id !== file.id),
        ]);
        setFiles([
            ...files.filter(f => f.source !== file.getMetadata("customServerId")),
        ]);
    };
    return (<react_filepond_1.FilePond name="files" required={required} allowMultiple={allowMultiple} maxFiles={maxFiles} files={rawFiles} onupdatefiles={setRawFiles} onaddfile={handleAddfile} onprocessfile={handleProcessfile} onactivatefile={handleActivatefile} onremovefile={handleRemovefile} {...filePondConfig} {...filePondFileValidationSizeConfig} {...filePondFileValidationTypeConfig}/>);
};
exports.default = FileUpload;

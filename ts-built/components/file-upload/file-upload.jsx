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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_filepond_1 = require("react-filepond");
var filepond_1 = require("filepond");
var filepond_plugin_file_validate_size_1 = require("filepond-plugin-file-validate-size");
var filepond_plugin_file_validate_type_1 = require("filepond-plugin-file-validate-type");
var storage_blob_1 = require("@azure/storage-blob");
var abort_controller_1 = require("@azure/abort-controller");
var http_1 = require("@hopfab/http");
var image_1 = require("@hopfab/image");
var string_1 = require("@hopfab/string");
require("filepond/dist/filepond.min.css");
var getFilePondInitialFile = function (source, origin, file) {
    var type;
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
var getFilePondInitialFileFromFilePondFile = function (file) {
    return getFilePondInitialFile(file.serverId, file.origin, file.file);
};
react_filepond_1.registerPlugin(filepond_plugin_file_validate_size_1.default, filepond_plugin_file_validate_type_1.default);
var FileUpload = function (_a) {
    var fileUploadUrl = _a.fileUploadUrl, blobStorageUrl = _a.blobStorageUrl, containerName = _a.containerName, required = _a.required, allowMultiple = _a.allowMultiple, maxFiles = _a.maxFiles, allowFileTypeValidation = _a.allowFileTypeValidation, acceptedFileTypes = _a.acceptedFileTypes, allowFileSizeValidation = _a.allowFileSizeValidation, maxFileSize = _a.maxFileSize, files = _a.files, setFiles = _a.setFiles;
    var _b = react_1.useState(files), rawFiles = _b[0], setRawFiles = _b[1];
    var filePondConfig = react_1.useState({
        server: {
            process: function (fieldName, file, metadata, load, error, progress, abort) {
                var blobName = metadata["blobName"];
                var controller = new abort_controller_1.AbortController();
                var params = new Map();
                params.set("containerName", containerName);
                params.set("blobName", blobName);
                var headers = new Headers();
                headers.append("Content-Type", "application/json; charset=utf-8");
                (function () { return __awaiter(void 0, void 0, void 0, function () {
                    var sasTokenResult, _a, blobServiceClient, containerClient, blockBlobClient, metadata, dimensions, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                sasTokenResult = null;
                                _c.label = 1;
                            case 1:
                                _c.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, http_1.get(fileUploadUrl + "/getSasToken", {
                                        params: params,
                                        headers: headers,
                                    })];
                            case 2:
                                sasTokenResult = _c.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                _a = _c.sent();
                                throw new Error("Une erreur est survenue en essayant de télécharger le fichier");
                            case 4:
                                blobServiceClient = new storage_blob_1.BlobServiceClient(blobStorageUrl + "?" + (sasTokenResult === null || sasTokenResult === void 0 ? void 0 : sasTokenResult.token));
                                containerClient = blobServiceClient.getContainerClient(containerName);
                                blockBlobClient = containerClient.getBlockBlobClient(blobName);
                                metadata = {
                                    filename: string_1.utoa(file.name), // Metadatas only accepts ASCII characters so we encode the name in base64
                                };
                                if (!image_1.isImage(file)) return [3 /*break*/, 6];
                                return [4 /*yield*/, image_1.getImageSize(file)];
                            case 5:
                                dimensions = _c.sent();
                                metadata.width = dimensions.width.toString();
                                metadata.height = dimensions.height.toString();
                                _c.label = 6;
                            case 6:
                                _c.trys.push([6, 8, , 9]);
                                return [4 /*yield*/, blockBlobClient.uploadData(file, {
                                        metadata: metadata,
                                        blobHTTPHeaders: {
                                            blobContentType: file.type,
                                        },
                                        onProgress: function (progressEvent) {
                                            // Should call the progress method to update the progress to 100% before calling load
                                            // Setting computable to false switches the loading indicator to infinite mode
                                            progress(true, progressEvent.loadedBytes, file.size);
                                        },
                                        abortSignal: controller.signal,
                                    })];
                            case 7:
                                _c.sent();
                                return [3 /*break*/, 9];
                            case 8:
                                _b = _c.sent();
                                throw new Error("Une erreur est survenue en essayant de télécharger le fichier");
                            case 9:
                                load(blobStorageUrl + "/" + containerName + "/" + encodeURIComponent(blobName));
                                return [2 /*return*/];
                        }
                    });
                }); })().catch(function (e) {
                    error(e.message);
                });
                // Should expose an abort method so the request can be cancelled
                return {
                    abort: function () {
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
            ? "D\u00E9posez vos fichiers ou <span class=\"filepond--label-action\">Choisir</span>"
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
        labelFileProcessingRevertError: "Erreur durant l'annulation",
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
    })[0];
    var filePondFileValidationTypeConfig = react_1.useState({
        allowFileTypeValidation: allowFileTypeValidation,
        acceptedFileTypes: acceptedFileTypes,
        labelFileTypeNotAllowed: "Fichier de type invalide",
        fileValidateTypeLabelExpectedTypes: acceptedFileTypes.length > 1
            ? "Attend {allButLastType} ou {lastType}"
            : "Attend {lastType}",
    })[0];
    var filePondFileValidationSizeConfig = react_1.useState({
        allowFileSizeValidation: allowFileSizeValidation,
        maxFileSize: maxFileSize,
        maxTotalFileSize: null,
        labelMaxFileSizeExceeded: "Le fichier est trop gros",
        labelMaxFileSize: "La taille maximale de fichier est de {filesize}",
        labelMaxTotalFileSizeExceeded: "Les fichiers sont trop gros",
        labelMaxTotalFileSize: "La taille maximale des fichiers est de {filesize}",
    })[0];
    var handleAddfile = function (error, file) {
        if (error)
            return;
        // On génère un nom de fichier seulement si un fichier est ajouté par l'utilisateur
        if (file.origin === filepond_1.FileOrigin.INPUT) {
            file.setMetadata("blobName", new Date().getTime() + "-" + file.filename);
        }
    };
    var handleProcessfile = function (error, file) {
        if (error)
            return;
        if (file.origin === filepond_1.FileOrigin.INPUT) {
            file.setMetadata("customServerId", file.serverId, true);
            setFiles(__spreadArray(__spreadArray([], files), [getFilePondInitialFileFromFilePondFile(file)]));
        }
    };
    var handleActivatefile = function (file) {
        // On permet de télécharger le fichier seulement si il a été stocké de manière permanente
        if (file.source !== null && typeof file.source === "string") {
            window.open(file.source);
        }
        else if (file.serverId !== null) {
            window.open(file.serverId);
        }
    };
    var handleRemovefile = function (error, file) {
        if (error)
            return;
        setRawFiles(function (oldRawFiles) { return __spreadArray([], oldRawFiles.filter(function (f) { return f.id !== file.id; })); });
        setFiles(__spreadArray([], files.filter(function (f) { return f.source !== file.getMetadata("customServerId"); })));
    };
    return (<react_filepond_1.FilePond name="files" required={required} allowMultiple={allowMultiple} maxFiles={maxFiles} files={rawFiles} onupdatefiles={setRawFiles} onaddfile={handleAddfile} onprocessfile={handleProcessfile} onactivatefile={handleActivatefile} onremovefile={handleRemovefile} {...filePondConfig} {...filePondFileValidationSizeConfig} {...filePondFileValidationTypeConfig}/>);
};
exports.default = FileUpload;
//# sourceMappingURL=file-upload.jsx.map
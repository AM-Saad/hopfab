"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUriPage = exports.getUriFromFullPath = void 0;
/**
 * Get uri from full path.
 * @param fullPath The full path to extract the uri from.
 * @param domain The domain part of the full path.
 */
var getUriFromFullPath = function (fullPath, domain) {
    if (!fullPath) {
        return "";
    }
    return fullPath.replace("https://hopfab.com/" + domain + "/", "");
};
exports.getUriFromFullPath = getUriFromFullPath;
var buildUriPage = function (basePath, pageIndex, categoryName, category) {
    var sanitizedCategory = category;
    if (sanitizedCategory && sanitizedCategory.startsWith("/"))
        sanitizedCategory = sanitizedCategory.substring(1);
    if (sanitizedCategory && sanitizedCategory.endsWith("/"))
        sanitizedCategory = sanitizedCategory.substring(0, sanitizedCategory.length - 1);
    return "/" + basePath + (sanitizedCategory
        ? (categoryName ? "/" + sanitizedCategory : "") + "/" + sanitizedCategory
        : "") + (pageIndex > 1 ? "/" + pageIndex : "");
};
exports.buildUriPage = buildUriPage;
//# sourceMappingURL=string.js.map
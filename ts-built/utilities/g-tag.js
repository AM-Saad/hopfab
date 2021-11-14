"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analytics = void 0;
var analytics = function (type, action, params) {
    if (typeof window === "undefined" || !window["gtag"])
        return;
    window["gtag"](type, action, params);
};
exports.analytics = analytics;
//# sourceMappingURL=g-tag.js.map
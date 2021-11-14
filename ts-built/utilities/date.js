"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
var format = function (date, format) {
    return date_fns_1.format(date, format, { locale: locale_1.fr });
};
exports.format = format;
//# sourceMappingURL=date.js.map
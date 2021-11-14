"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_helmet_1 = require("react-helmet");
var Facebook = function (_a) {
    var url = _a.url, _b = _a.name, name = _b === void 0 ? null : _b, _c = _a.type, type = _c === void 0 ? "website" : _c, title = _a.title, desc = _a.desc, image = _a.image, locale = _a.locale;
    return (<react_helmet_1.Helmet>
    {name && <meta property="og:site_name" content={name}/>}
    <meta property="og:locale" content={locale}/>
    <meta property="og:url" content={url}/>
    <meta property="og:type" content={type}/>
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={desc}/>
    <meta property="og:image" content={image}/>
    <meta property="og:image:alt" content={desc}/>
  </react_helmet_1.Helmet>);
};
exports.default = Facebook;
//# sourceMappingURL=facebook.jsx.map
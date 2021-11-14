"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_helmet_1 = require("react-helmet");
var Twitter = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "summary_large_image" : _b, _c = _a.username, username = _c === void 0 ? null : _c, title = _a.title, desc = _a.desc, image = _a.image;
    return (<react_helmet_1.Helmet>
    {username && <meta name="twitter:creator" content={username}/>}
    <meta name="twitter:card" content={type}/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={desc}/>
    <meta name="twitter:image" content={image}/>
    <meta name="twitter:image:alt" content={desc}/>
  </react_helmet_1.Helmet>);
};
exports.default = Twitter;
//# sourceMappingURL=twitter.jsx.map
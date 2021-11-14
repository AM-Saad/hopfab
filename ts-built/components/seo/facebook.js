"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_helmet_1 = require("react-helmet");
const Facebook = ({ url, name = null, type = "website", title, desc, image, locale, }) => (<react_helmet_1.Helmet>
    {name && <meta property="og:site_name" content={name}/>}
    <meta property="og:locale" content={locale}/>
    <meta property="og:url" content={url}/>
    <meta property="og:type" content={type}/>
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={desc}/>
    <meta property="og:image" content={image}/>
    <meta property="og:image:alt" content={desc}/>
  </react_helmet_1.Helmet>);
exports.default = Facebook;

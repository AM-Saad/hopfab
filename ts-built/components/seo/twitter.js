"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_helmet_1 = require("react-helmet");
const Twitter = ({ type = "summary_large_image", username = null, title, desc, image, }) => (<react_helmet_1.Helmet>
    {username && <meta name="twitter:creator" content={username}/>}
    <meta name="twitter:card" content={type}/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={desc}/>
    <meta name="twitter:image" content={image}/>
    <meta name="twitter:image:alt" content={desc}/>
  </react_helmet_1.Helmet>);
exports.default = Twitter;

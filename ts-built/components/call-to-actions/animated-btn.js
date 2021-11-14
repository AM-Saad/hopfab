"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const animatedBtn = ({ link, className, content, firstSpan, secondSpan }) => {
    return (<gatsby_1.Link to={link} className={className}> 
            <span className={`${firstSpan !== null && firstSpan !== void 0 ? firstSpan : " "} animated button-text`}> {content}</span>
            <span className={`${secondSpan !== null && secondSpan !== void 0 ? secondSpan : " "}animated button-text`}>{content}</span>
            <span className={` opacity-0 button-text`}>{content}</span>

            </gatsby_1.Link>);
};
exports.default = animatedBtn;

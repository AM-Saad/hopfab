"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var animatedBtn = function (_a) {
    var link = _a.link, className = _a.className, content = _a.content, firstSpan = _a.firstSpan, secondSpan = _a.secondSpan;
    return (<gatsby_1.Link to={link} className={className}> 
            <span className={(firstSpan !== null && firstSpan !== void 0 ? firstSpan : " ") + " animated button-text"}> {content}</span>
            <span className={(secondSpan !== null && secondSpan !== void 0 ? secondSpan : " ") + "animated button-text"}>{content}</span>
            <span className={" opacity-0 button-text"}>{content}</span>

            </gatsby_1.Link>);
};
exports.default = animatedBtn;
//# sourceMappingURL=animated-btn.jsx.map
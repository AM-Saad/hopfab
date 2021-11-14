"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var router_1 = require("@reach/router");
var down_right_arrow_icon_1 = require("./icons/down-right-arrow-icon");
var AWithArrow = function (_a) {
    var children = _a.children, className = _a.className, href = _a.href, target = _a.target, rel = _a.rel;
    return (<a href={href} target={target} rel={rel} className={"group " + className}>
      <router_1.Match path={href}>
        {function (_a) {
            var match = _a.match;
            return (<>
            {children}
            <down_right_arrow_icon_1.default className={"transition duration-200 ease-in-out transform ml-1 " + (!match ? "opacity-0 -translate-x-1 -translate-y-1 " : "") + " group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0"}/>
          </>);
        }}
      </router_1.Match>
    </a>);
};
exports.default = AWithArrow;
//# sourceMappingURL=a-with-arrow.jsx.map
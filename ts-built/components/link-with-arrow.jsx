"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var router_1 = require("@reach/router");
var down_right_arrow_icon_1 = require("./icons/down-right-arrow-icon");
var LinkWithArrow = function (_a) {
    var className = _a.className, to = _a.to, children = _a.children;
    return (<gatsby_1.Link to={to} className={"group " + className}>
      <router_1.Match path={to}>
        {function (_a) {
            var match = _a.match;
            return (<>
            {children}
            <down_right_arrow_icon_1.default className={"transition duration-200 ease-in-out transform ml-1 mt-0.5 " + (!match ? "opacity-0 -translate-x-1 -translate-y-1 " : "") + " group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0"}/>
          </>);
        }}
      </router_1.Match>
    </gatsby_1.Link>);
};
exports.default = LinkWithArrow;
//# sourceMappingURL=link-with-arrow.jsx.map
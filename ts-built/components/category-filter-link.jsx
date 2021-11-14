"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var router_1 = require("@reach/router");
var CategoryFilterLink = function (_a) {
    var className = _a.className, to = _a.to, hasSelectedCategory = _a.hasSelectedCategory, categoryName = _a.categoryName, categoryCount = _a.categoryCount;
    return (<router_1.Match path={to}>
      {function (_a) {
            var match = _a.match;
            return (<gatsby_1.Link to={to} className={"group " + className + " " + (hasSelectedCategory && !match ? "text-gris-200" : "text-gris-800")}>
          <span className={(hasSelectedCategory && match ? "border-b-2" : "") + " " + (hasSelectedCategory && !match
                    ? "border-gris-200"
                    : "border-gris-800") + " group-hover:border-b-2"}>
            {categoryName}
          </span>
          <sup className="text-xs xl:text-base ml-1 border-none">
            {categoryCount}
          </sup>
        </gatsby_1.Link>);
        }}
    </router_1.Match>);
};
exports.default = CategoryFilterLink;
//# sourceMappingURL=category-filter-link.jsx.map
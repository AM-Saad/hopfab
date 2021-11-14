"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const router_1 = require("@reach/router");
const CategoryFilterLink = ({ className, to, hasSelectedCategory, categoryName, categoryCount, }) => {
    return (<router_1.Match path={to}>
      {({ match }) => (<gatsby_1.Link to={to} className={`group ${className} ${hasSelectedCategory && !match ? "text-gris-200" : "text-gris-800"}`}>
          <span className={`${hasSelectedCategory && match ? "border-b-2" : ""} ${hasSelectedCategory && !match
                ? "border-gris-200"
                : "border-gris-800"} group-hover:border-b-2`}>
            {categoryName}
          </span>
          <sup className="text-xs xl:text-base ml-1 border-none">
            {categoryCount}
          </sup>
        </gatsby_1.Link>)}
    </router_1.Match>);
};
exports.default = CategoryFilterLink;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lodash_1 = require("lodash");
var category_filter_link_1 = require("./category-filter-link");
var CategoryFilters = function (_a) {
    var basePath = _a.basePath, categoryName = _a.categoryName, categoryStats = _a.categoryStats, selectedCategory = _a.selectedCategory, totalCount = _a.totalCount, className = _a.className;
    return (<ul className={className + " flex flex-wrap max-w-sm"}>
      {categoryStats.map(function (categoryStat) { return (<li key={categoryStat.fieldValue} className="flex-0 mr-4 mb-1 xl:mb-2">
          <category_filter_link_1.default to={"/" + basePath + "/" + categoryName + "/" + lodash_1.kebabCase(categoryStat.fieldValue)} className={"font-medium text-1xl xl:text-3.5xl " + (selectedCategory ? "text-gris-200" : "text-gris-800") + " rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"} hasSelectedCategory={selectedCategory !== undefined} categoryName={categoryStat.fieldValue} categoryCount={categoryStat.totalCount}></category_filter_link_1.default>
        </li>); })}
      {selectedCategory && (<li className="flex-0 mr-4 mb-1 xl:mb-2">
          <category_filter_link_1.default to={"/" + basePath} className={"font-medium text-1xl xl:text-3.5xl " + (selectedCategory ? "text-gris-200" : "text-gris-800") + " rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"} hasSelectedCategory={selectedCategory !== undefined} categoryName="Tous" categoryCount={totalCount}></category_filter_link_1.default>
        </li>)}
    </ul>);
};
exports.default = CategoryFilters;
//# sourceMappingURL=category-filters.jsx.map
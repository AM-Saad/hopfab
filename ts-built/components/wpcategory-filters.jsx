"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var category_filter_link_1 = require("./category-filter-link");
var WpCategoryFilters = function (_a) {
    var _b;
    var categoryStats = _a.categoryStats, categories = _a.categories, activeCategory = _a.activeCategory, totalCount = _a.totalCount, className = _a.className;
    var categoryStatsWithCategoryInfos = (_b = categoryStats === null || categoryStats === void 0 ? void 0 : categoryStats.map(function (categoryStat) { return (__assign(__assign({}, categoryStat), { category: categories.find(function (c) { return c.id === categoryStat.fieldValue; }) })); })) !== null && _b !== void 0 ? _b : [];
    return (<ul className={className + " flex flex-wrap max-w-md"}>
      {categoryStatsWithCategoryInfos.map(function (categoryStat) { return (<li key={categoryStat.fieldValue} className="flex-0 mr-4 mb-1 xl:mb-2">
          <category_filter_link_1.default to={"/blog" + categoryStat.category.uri} className={"font-medium text-1xl xl:text-3.5xl " + (activeCategory ? "text-gris-200" : "text-gris-800") + " rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"} hasSelectedCategory={activeCategory !== undefined} categoryName={categoryStat.category.name} categoryCount={categoryStat.totalCount}/>
        </li>); })}
      {activeCategory && (<li className="flex-0 mr-4 mb-1 xl:mb-2">
          <category_filter_link_1.default to={"/blog"} className={"font-medium text-1xl xl:text-3.5xl " + (activeCategory ? "text-gris-200" : "text-gris-800") + " rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"} hasSelectedCategory={activeCategory !== undefined} categoryName="Tous" categoryCount={totalCount}></category_filter_link_1.default>
        </li>)}
    </ul>);
};
exports.default = WpCategoryFilters;
//# sourceMappingURL=wpcategory-filters.jsx.map
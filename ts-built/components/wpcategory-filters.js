"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const category_filter_link_1 = require("./category-filter-link");
const WpCategoryFilters = ({ categoryStats, categories, activeCategory, totalCount, className, }) => {
    var _a;
    const categoryStatsWithCategoryInfos = (_a = categoryStats === null || categoryStats === void 0 ? void 0 : categoryStats.map(categoryStat => (Object.assign(Object.assign({}, categoryStat), { category: categories.find(c => c.id === categoryStat.fieldValue) })))) !== null && _a !== void 0 ? _a : [];
    return (<ul className={`${className} flex flex-wrap max-w-md`}>
      {categoryStatsWithCategoryInfos.map(categoryStat => (<li key={categoryStat.fieldValue} className="flex-0 mr-4 mb-1 xl:mb-2">
          <category_filter_link_1.default to={`/blog${categoryStat.category.uri}`} className={`font-medium text-1xl xl:text-3.5xl ${activeCategory ? "text-gris-200" : "text-gris-800"} rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700`} hasSelectedCategory={activeCategory !== undefined} categoryName={categoryStat.category.name} categoryCount={categoryStat.totalCount}/>
        </li>))}
      {activeCategory && (<li className="flex-0 mr-4 mb-1 xl:mb-2">
          <category_filter_link_1.default to={`/blog`} className={`font-medium text-1xl xl:text-3.5xl ${activeCategory ? "text-gris-200" : "text-gris-800"} rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700`} hasSelectedCategory={activeCategory !== undefined} categoryName="Tous" categoryCount={totalCount}></category_filter_link_1.default>
        </li>)}
    </ul>);
};
exports.default = WpCategoryFilters;

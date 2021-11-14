import React from "react";

import { Stats } from "../models/stats";
import { WpCategory } from "../models/wpcategory";
import CategoryFilterLink from "./category-filter-link";

type DataProps = {
  categoryStats: Stats[];
  categories: WpCategory[];
  activeCategory: WpCategory;
  totalCount: number;
  className?: string;
};

const WpCategoryFilters: React.FC<DataProps> = ({
  categoryStats,
  categories,
  activeCategory,
  totalCount,
  className,
}) => {
  const categoryStatsWithCategoryInfos =
    categoryStats?.map(categoryStat => ({
      ...categoryStat,
      category: categories.find(c => c.id === categoryStat.fieldValue),
    })) ?? [];

  return (
    <ul className={`${className} flex flex-wrap max-w-md`}>
      {categoryStatsWithCategoryInfos.map(categoryStat => (
        <li key={categoryStat.fieldValue} className="flex-0 mr-4 mb-1 xl:mb-2">
          <CategoryFilterLink
            to={`/blog${categoryStat.category.uri}`}
            className={`font-medium text-1xl xl:text-3.5xl ${
              activeCategory ? "text-gris-200" : "text-gris-800"
            } rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700`}
            hasSelectedCategory={activeCategory !== undefined}
            categoryName={categoryStat.category.name}
            categoryCount={categoryStat.totalCount}
          />
        </li>
      ))}
      {activeCategory && (
        <li className="flex-0 mr-4 mb-1 xl:mb-2">
          <CategoryFilterLink
            to={`/blog`}
            className={`font-medium text-1xl xl:text-3.5xl ${
              activeCategory ? "text-gris-200" : "text-gris-800"
            } rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700`}
            hasSelectedCategory={activeCategory !== undefined}
            categoryName="Tous"
            categoryCount={totalCount}
          ></CategoryFilterLink>
        </li>
      )}
    </ul>
  );
};

export default WpCategoryFilters;

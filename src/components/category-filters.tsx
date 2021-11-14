import React from "react";
import { kebabCase } from "lodash";

import { Stats } from "../models/stats";
import CategoryFilterLink from "./category-filter-link";

type DataProps = {
  basePath: string;
  categoryName: string;
  categoryStats: Stats[];
  selectedCategory: string | undefined;
  totalCount: number;
  className?: string;
};

const CategoryFilters: React.FC<DataProps> = ({
  basePath,
  categoryName,
  categoryStats,
  selectedCategory,
  totalCount,
  className,
}) => {
  return (
    <ul className={`${className} flex flex-wrap max-w-sm`}>
      {categoryStats.map(categoryStat => (
        <li key={categoryStat.fieldValue} className="flex-0 mr-4 mb-1 xl:mb-2">
          <CategoryFilterLink
            to={`/${basePath}/${categoryName}/${kebabCase(
              categoryStat.fieldValue
            )}`}
            className={`font-medium text-1xl xl:text-3.5xl ${
              selectedCategory ? "text-gris-200" : "text-gris-800"
            } rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700`}
            hasSelectedCategory={selectedCategory !== undefined}
            categoryName={categoryStat.fieldValue}
            categoryCount={categoryStat.totalCount}
          ></CategoryFilterLink>
        </li>
      ))}
      {selectedCategory && (
        <li className="flex-0 mr-4 mb-1 xl:mb-2">
          <CategoryFilterLink
            to={`/${basePath}`}
            className={`font-medium text-1xl xl:text-3.5xl ${
              selectedCategory ? "text-gris-200" : "text-gris-800"
            } rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700`}
            hasSelectedCategory={selectedCategory !== undefined}
            categoryName="Tous"
            categoryCount={totalCount}
          ></CategoryFilterLink>
        </li>
      )}
    </ul>
  );
};

export default CategoryFilters;

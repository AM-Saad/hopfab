import React from "react";
import { Link } from "gatsby";
import { Match } from "@reach/router";

type DataProps = {
  className?: string;
  to: string;
  hasSelectedCategory: boolean;
  categoryName: string;
  categoryCount: number;
};

const CategoryFilterLink: React.FC<DataProps> = ({
  className,
  to,
  hasSelectedCategory,
  categoryName,
  categoryCount,
}) => {
  return (
    <Match path={to}>
      {({ match }) => (
        <Link
          to={to}
          className={`group ${className} ${
            hasSelectedCategory && !match ? "text-gris-200" : "text-gris-800"
          }`}
        >
          <span
            className={`${hasSelectedCategory && match ? "border-b-2" : ""} ${
              hasSelectedCategory && !match
                ? "border-gris-200"
                : "border-gris-800"
            } group-hover:border-b-2`}
          >
            {categoryName}
          </span>
          <sup className="text-xs xl:text-base ml-1 border-none">
            {categoryCount}
          </sup>
        </Link>
      )}
    </Match>
  );
};

export default CategoryFilterLink;

import React from "react";
import { Link } from "gatsby";
import { Match } from "@reach/router";

import DownRightArrowIcon from "./icons/down-right-arrow-icon";

type DataProps = {
  className?: string;
  to: string;
  children: any;
};

const LinkWithArrow: React.FC<DataProps> = ({ className, to, children }) => {
  return (
    <Link to={to} className={`group ${className}`}>
      <Match path={to}>
        {({ match }) => (
          <>
            {children}
            <DownRightArrowIcon
              className={`transition duration-200 ease-in-out transform ml-1 mt-0.5 ${
                !match ? "opacity-0 -translate-x-1 -translate-y-1 " : ""
              } group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0`}
            />
          </>
        )}
      </Match>
    </Link>
  );
};

export default LinkWithArrow;

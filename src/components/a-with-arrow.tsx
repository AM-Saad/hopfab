import React from "react";
import { Match } from "@reach/router";

import DownRightArrowIcon from "./icons/down-right-arrow-icon";

type DataProps = {
  children: any;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
};

const AWithArrow: React.FC<DataProps> = ({
  children,
  className,
  href,
  target,
  rel,
}) => {
  return (
    <a href={href} target={target} rel={rel} className={`group ${className}`}>
      <Match path={href}>
        {({ match }) => (
          <>
            {children}
            <DownRightArrowIcon
              className={`transition duration-200 ease-in-out transform ml-1 ${
                !match ? "opacity-0 -translate-x-1 -translate-y-1 " : ""
              } group-hover:opacity-100 group-hover:-translate-x-0 group-hover:-translate-y-0`}
            />
          </>
        )}
      </Match>
    </a>
  );
};

export default AWithArrow;

import React from "react";

type DataProps = {
  className?: string;
};

const ChevronDownIcon: React.FC<DataProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line
        x1="5.70711"
        y1="7.29289"
        x2="10.6569"
        y2="12.2426"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="9.29289"
        y1="12.2426"
        x2="14.2426"
        y2="7.29289"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ChevronDownIcon;

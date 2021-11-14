import React from "react";

type DataProps = {
  className?: string;
};

const DotIcon: React.FC<DataProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
};

export default DotIcon;

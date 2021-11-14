import React from "react";

type DataProps = {
  className?: string;
};

const XIcon: React.FC<DataProps> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
};

export default XIcon;

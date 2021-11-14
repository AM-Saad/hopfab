import React from "react";

type DataProps = {
  className?: string;
};

const LeftArrowIcon: React.FC<DataProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="55"
      height="55"
      viewBox="0 0 55 55"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M51.6789 28.0389L4.7086 27.8678" strokeWidth="6" />
      <path d="M29.9893 52.4594L3.0556 25.5257" strokeWidth="6" />
      <path d="M29.4803 3.09579L2.99703 29.5791" strokeWidth="6" />
    </svg>
  );
};

export default LeftArrowIcon;

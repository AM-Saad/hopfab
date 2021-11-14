import React from "react";

type DataProps = {
  className?: string;
};

const MinusIcon: React.FC<DataProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0.367496 12.1865L23.9269 12.2699" strokeWidth="3" />
    </svg>
  );
};

export default MinusIcon;

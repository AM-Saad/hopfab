import React from "react";

type DataProps = {
  className?: string;
};

const DownLeftArrowIcon: React.FC<DataProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="9"
      height="10"
      viewBox="0 0 9 10"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8.08569 1.19238L1.0127 8.31738Z" fill="black" />
      <path d="M8.08569 1.19238L1.0127 8.31738" strokeWidth="1.5" />
      <path d="M1.11719 0.779297V8.9213Z" fill="black" />
      <path d="M1.11719 0.779297V8.9213" strokeWidth="1.5" />
      <path d="M8.5011 8.31738H0.496095Z" fill="black" />
      <path d="M8.5011 8.31738H0.496095" strokeWidth="1.5" />
    </svg>
  );
};

export default DownLeftArrowIcon;

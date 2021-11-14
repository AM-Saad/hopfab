import React from "react";

type DataProps = {
  className?: string;
};

const DownRightArrowIcon: React.FC<DataProps> = ({ className }) => {
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
      <path d="M0.914305 1.19238L7.9873 8.31738" strokeWidth="1.5" />
      <path d="M7.88281 0.779297L7.88281 8.9213" strokeWidth="1.5" />
      <path d="M0.498906 8.31738H8.50391" strokeWidth="1.5" />
    </svg>
  );
};

export default DownRightArrowIcon;

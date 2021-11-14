import React from "react";

type DataProps = {
  className?: string;
};

const MapMarkerIcon: React.FC<DataProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="384"
      height="512"
      viewBox="0 0 384 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
      ></path>
    </svg>
  );
};

export default MapMarkerIcon;

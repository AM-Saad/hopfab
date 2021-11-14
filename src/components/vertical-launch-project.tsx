import React from "react";
import { Link } from "gatsby";

import DotIcon from "../components/icons/dot-icon";

type DataProps = {
  theme: "dark" | "light";
};

const VerticalLaunchProject: React.FC<DataProps> = ({ theme }) => {
  return (
    <div
      className={`transform rotate-180 uppercase text-xsm font-black ${
        theme === "dark" ? "text-gris-800" : "text-brown-50"
      }`}
      style={{ writingMode: "vertical-rl" }}
    >
      <Link
        to="/devis"
        className={`group flex items-center transform transition duration-200 translate-x-0 rounded-md my-8 hover:translate-y-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          theme === "dark"
            ? "focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
            : "focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
        }`}
      >
        <DotIcon className="w-2.5 h-2.5 opacity-0 transition duration-200 ease-in-out transform mb-4 group-hover:opacity-100" />
        <div className="transform duration-200 ease-in-out">
          Lancer mon projet
          <div
            className={`h-full ${
              theme === "dark" ? "bg-gris-800" : "bg-brown-50"
            }`}
            style={{ width: "2px" }}
          ></div>
        </div>
      </Link>
    </div>
  );
};

export default VerticalLaunchProject;

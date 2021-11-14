"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const dot_icon_1 = require("../components/icons/dot-icon");
const VerticalLaunchProject = ({ theme }) => {
    return (<div className={`transform rotate-180 uppercase text-xsm font-black ${theme === "dark" ? "text-gris-800" : "text-brown-50"}`} style={{ writingMode: "vertical-rl" }}>
      <gatsby_1.Link to="/devis" className={`group flex items-center transform transition duration-200 translate-x-0 rounded-md my-8 hover:translate-y-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${theme === "dark"
            ? "focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700"
            : "focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"}`}>
        <dot_icon_1.default className="w-2.5 h-2.5 opacity-0 transition duration-200 ease-in-out transform mb-4 group-hover:opacity-100"/>
        <div className="transform duration-200 ease-in-out">
          Lancer mon projet
          <div className={`h-full ${theme === "dark" ? "bg-gris-800" : "bg-brown-50"}`} style={{ width: "2px" }}></div>
        </div>
      </gatsby_1.Link>
    </div>);
};
exports.default = VerticalLaunchProject;

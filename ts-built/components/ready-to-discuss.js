"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const dot_icon_1 = require("./icons/dot-icon");
const ReadyToDiscuss = ({ className }) => {
    return (<div className={`${className !== null && className !== void 0 ? className : ""} bg-brown-700 py-28`}>
      <div className="text-brown-50 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5">
        <h3 className="text-5.75xl sm:text-6.5xl lg:text-8.5xl font-bold max-w-5xl pb-24">
          Prêt à discuter de votre projet ?
        </h3>
        <div>
          <gatsby_1.Link to="/devis" className="group inline-flex items-center uppercase text-xsm px-8 py-5.5 font-bold text-brown-50 bg-gris-800 rounded-full focus:outline-none focus:ring-4 focus:ring-gris-800 focus:ring-opacity-50">
            <dot_icon_1.default className="opacity-0 transition duration-200 ease-in-out transform -translate-x-2.5 w-2.5 h-2.5 text-brown-50 mr-2 group-hover:opacity-100 group-hover:-translate-x-0"/>
            <span className="transition duration-200 ease-in-out transform -translate-x-2.5 group-hover:-translate-x-0">
              Je lance mon projet
            </span>
          </gatsby_1.Link>
        </div>
      </div>
    </div>);
};
exports.default = ReadyToDiscuss;

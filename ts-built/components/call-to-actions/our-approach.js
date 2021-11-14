"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const dot_icon_1 = require("../icons/dot-icon");
const OurApproach = ({ className }) => {
    return (<div className={`${className !== null && className !== void 0 ? className : ""} bg-brown-700 text-brown-50`}>
      <section className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5">
        <h3 className="text-5.75xl sm:text-6.5xl md:text-7.5xl lg:text-8.1xl xl:text-9.25xl font-bold pb-16 text-brown-50">
          Notre démarche vous intéresse ?
        </h3>
        <gatsby_1.Link to="/contact" className="group inline-flex items-center uppercase text-xsm px-8 py-5.5 font-bold text-brown-50 bg-gris-800 rounded-full focus:outline-none focus:ring-4 focus:ring-gris-800 focus:ring-opacity-50 mb-18 lg:mb-40 xl:mb-52">
          <dot_icon_1.default className="opacity-0 transition duration-200 ease-in-out transform -translate-x-2.5 w-2.5 h-2.5 text-brown-50 mr-2 group-hover:opacity-100 group-hover:-translate-x-0"/>
          <span className="transition duration-200 ease-in-out transform -translate-x-2.5 group-hover:-translate-x-0">
            Contactez-nous
          </span>
        </gatsby_1.Link>
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-4 gap-7 md:gap-12 lg:gap-22 xl:gap-30 2xl:gap-36 text-base xl:text-xl">
          <div>
            Plus de <span className="font-medium">1200 projets</span>
            <br /> réalisés avec vous
          </div>
          <div>
            Des <span className="font-medium">artisans français</span>
            <br /> sélectionnés avec soin
          </div>
          <div>
            <span className="font-medium">3 devis détaillés</span>
            <br /> sous 7 à 10 jours
          </div>
          <div>
            Des <span className="font-medium">prix directs</span>
            <br /> provenant des ateliers
          </div>
        </div>
      </section>
    </div>);
};
exports.default = OurApproach;
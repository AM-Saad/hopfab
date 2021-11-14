import React from "react";
import { Link } from "gatsby";

import DotIcon from "../icons/dot-icon";

type DataProps = {
  className?: string;
};

const WhyHopfab: React.FC<DataProps> = ({ className }) => {
  return (
    <div className={`${className ?? ""} bg-brown-700 text-brown-50`}>
      <section className="text-brown-50 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5">
        <h3 className="text-5.75xl sm:text-6.5xl md:text-7xl lg:text-8.5xl font-bold max-w-5xl pb-20 xl:pb-24">
          Pourquoi faire appel à Hopfab ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-20 lg:gap-28 pb-20">
          <div>
            <div className="text-xsm pb-4">01</div>
            <h4 className="font-bold text-lg xl:text-1xl pb-8">
              Ateliers sélectionnés partout en France
            </h4>
            <div className="text-base xl:text-xl">
              <ul>
                <li>Vérification administrative</li>
                <li>Référentiel précis</li>
                <li>Évaluation en fin de projet</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-xsm pb-4">02</div>
            <h4 className="font-bold text-lg xl:text-1xl pb-8">
              Expertise pour tirer le meilleur parti des ateliers
            </h4>
            <div className="text-base xl:text-xl">
              <ul>
                <li>Présélection des ateliers pertinents</li>
                <li>Formation des ateliers</li>
                <li>Expertise et conseils matériaux</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-xsm pb-4">03</div>
            <h4 className="font-bold text-lg xl:text-1xl pb-8">
              Méthodologie de gestion performante
            </h4>
            <div className="text-base xl:text-xl">
              <ul>
                <li>Consultation clé en main (7/10 j)</li>
                <li>Plateforme de contractualisation</li>
                <li>Outil de rétroplanning</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Link
            to="/devis"
            className="group inline-flex items-center uppercase text-xsm px-8 py-5.5 font-bold text-brown-50 bg-gris-800 rounded-full focus:outline-none focus:ring-4 focus:ring-gris-800 focus:ring-opacity-50"
          >
            <DotIcon className="opacity-0 transition duration-200 ease-in-out transform -translate-x-2.5 w-2.5 h-2.5 text-brown-50 mr-2 group-hover:opacity-100 group-hover:-translate-x-0" />
            <span className="transition duration-200 ease-in-out transform -translate-x-2.5 group-hover:-translate-x-0">
              Je lance mon projet
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyHopfab;

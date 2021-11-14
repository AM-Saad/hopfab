import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Project } from "../../models/project";
import { getUriFromFullPath } from "../../utilities/string";

type DataProps = {
  projet: Project;
  className: string;
};

const ProjectListItem: React.FC<DataProps> = ({ projet, className }) => {
  const prestationsPrincipales =
    projet.prestationsPrincipales?.split(",").filter(p => p && p.length > 0) ??
    [];
  const imagePrincipale = getImage(projet.photo1Image);

  return (
    <article className={className}>
      <Link
        to={`/realisations/${getUriFromFullPath(
          projet.fullPath,
          "realisations"
        )}`}
        className="flex overflow-hidden"
      >
        {imagePrincipale && (
          <GatsbyImage
            image={imagePrincipale}
            alt={projet.photo1Description ?? ""}
            className="transform duration-200 ease-in-out scale-100 hover:scale-110"
          />
        )}
      </Link>
      <div>
        <div className="text-lg xl:text-1xl mt-4">
          <span className="text-base xl:text-xl font-bold uppercase mr-1">
            {projet.client}
          </span>
          <h2 className="inline">{projet.titreDescriptif}</h2>
          {projet.architecte && (
            <span>
              <span className="mx-1">par</span>
              <span className="text-base xl:text-xl font-bold uppercase">
                {projet.architecte}
              </span>
            </span>
          )}
        </div>
        <ul className="flex flex-wrap mt-4">
          {prestationsPrincipales.map((prestationPrincipale, index) => (
            <li
              key={index}
              className="uppercase text-xs flex items-center justify-center border border-gray-500 rounded-full py-1 px-3 mr-2 mb-2"
            >
              {prestationPrincipale}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectListItem;

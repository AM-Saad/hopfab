import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Material } from "../../models/material";
import { getUriFromFullPath } from "../../utilities/string";

type DataProps = {
  material: Material;
  className: string;
};

const MaterialListItem: React.FC<DataProps> = ({ material, className }) => {
  const domainesDapplication =
    material.domainesDapplication?.split(",").filter(p => p && p.length > 0) ??
    [];
  const imagePrincipale = getImage(material.photo1Image);

  return (
    <article className={className}>
      <Link
        to={`/materiautheque/${getUriFromFullPath(
          material.fullPath,
          "materiautheque"
        )}`}
        className="flex overflow-hidden"
      >
        {imagePrincipale && (
          <GatsbyImage
            image={imagePrincipale}
            alt={material.photo1Description ?? ""}
            className="transform duration-200 ease-in-out scale-100 hover:scale-110"
          />
        )}
      </Link>
      <div>
        <div className="flex flex-wrap text-base xl:text-xl mt-4">
          <h2 className="font-bold uppercase mr-1">{material.nomMateriau}</h2>
          <div>{material.reference}</div>
        </div>
        <ul className="flex flex-wrap mt-4">
          {domainesDapplication.map((domaineDapplication, index) => (
            <li
              key={index}
              className="uppercase text-xs flex items-center justify-center border border-gray-500 rounded-full py-1 px-3 mr-2 mb-2"
            >
              {domaineDapplication}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default MaterialListItem;

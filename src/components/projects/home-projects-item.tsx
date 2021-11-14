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
        <div className={className}>
        <div className="projects-section_item ">
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
                        className="transform duration-200 ease-in-out scale-100 hover:scale-110 w-full"
                    />
                )}
            </Link>
            <p className="text-xsm py-5 uppercase" >
                <b className="font-black"> {projet.client} </b>
                 {projet.titreDescriptif}<br />
                {projet.architecte && (
                    <b>
                        <span className="mr-1">par</span>
                        <span className=" font-bold uppercase">
                            {projet.architecte}
                        </span>
                    </b>
                )}
            </p>
        </div>
        </div>
    );
};

export default ProjectListItem;

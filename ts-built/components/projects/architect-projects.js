"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const architect_projects_item_1 = require("./architect-projects-item");
const ComponentName = () => {
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
    query AllArchitectProjects {
    allarchitectprojets: allGoogleProjetsSiteSheet {
      nodes {
        id
        #idProjet
        fullPath: lienSiteHopfab
        prestations
        titre
        titreDescriptif
        architecte
        client
        prestationsPrincipales
        description
        photo1Description
        photo1Image {
          childImageSharp {
            gatsbyImageData(width: 560, height: 640, layout: CONSTRAINED)
          }
        }
      }
      totalCount
    }
  }
  `);
    const projects = data.allarchitectprojets.nodes;
    return (<div className="projects-section_items grid sm:grid-cols-1 md:gap-x-16 ">
            {<architect_projects_item_1.default key={projects[0].id} projet={projects[0]} className={``}/>}

     
        </div>);
};
exports.default = ComponentName;

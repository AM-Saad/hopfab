"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const home_projects_item_1 = require("./home-projects-item");
const ComponentName = () => {
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
    query AllProjects {
    allprojets: allGoogleProjetsSiteSheet {
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
            gatsbyImageData(width: 560, height: 340, layout: CONSTRAINED)
          }
        }
      }
      totalCount
    }
   
  
  }
  `);
    const projects = data.allprojets.nodes;
    console.log(projects);
    return (<div className="projects-section_items grid sm:grid-cols-1 lg:grid-cols-2 md:gap-x-16 lg:gap-x-21 xl:gap-x-22 2xl:gap-x-31">
            {<home_projects_item_1.default key={projects[0].id} projet={projects[0]} className={``}/>}
            {<home_projects_item_1.default key={projects[1].id} projet={projects[1]} className={`hidden lg:block`}/>}

     
        </div>);
};
exports.default = ComponentName;

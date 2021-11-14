import React from "react"
import { Link } from "gatsby";
import { getUriFromFullPath } from "../../utilities/string";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProjectsListItem from './home-projects-item'

const ComponentName = () => {
    const data = useStaticQuery(graphql`
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
  `)
    const projects = data.allprojets.nodes
    return (

        <div className="projects-section_items grid sm:grid-cols-1 lg:grid-cols-2 md:gap-x-16 lg:gap-x-21 xl:gap-x-22 2xl:gap-x-31">
            { <ProjectsListItem
                key={projects[0].id}
                projet={projects[0]}
                className={``}
            />}
            { <ProjectsListItem
                key={projects[1].id}
                projet={projects[1]}
                className={`hidden lg:block`}
            />}

     
        </div>)
}

export default ComponentName


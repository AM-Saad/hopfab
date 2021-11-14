import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectsListItem from './architect-projects-item'

const ComponentName = () => {
    const data = useStaticQuery(graphql`
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
  `)
    const projects = data.allarchitectprojets.nodes
    return (

        <div className="projects-section_items grid sm:grid-cols-1 md:gap-x-16 ">
            { <ProjectsListItem
                key={projects[0].id}
                projet={projects[0]}
                className={``}
            />}

     
        </div>)
}

export default ComponentName


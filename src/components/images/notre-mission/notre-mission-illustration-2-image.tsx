import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const NotreMissionIllustration2Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: {
          eq: "notre-mission/personnes-en-train-d-echanger-autour-d-un-projet.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 536, height: 760, layout: CONSTRAINED)
        }
      }
    }
  `);

  const placeholderImage = getImage(data.placeholderImage);

  if (!placeholderImage) {
    return <div>Image non trouvée</div>;
  }

  return (
    <GatsbyImage
      image={placeholderImage}
      alt="Personnes en train d'échanger autour d'un projet"
    />
  );
};

export default NotreMissionIllustration2Image;

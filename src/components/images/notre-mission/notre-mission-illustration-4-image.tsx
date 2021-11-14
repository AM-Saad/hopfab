import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const NotreMissionIllustration4Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: {
          eq: "notre-mission/agencement-interieur-d-un-appartemment-par-les-artisans-hopfab.jpg"
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
      alt="Agencement intérieur d'un appartement par les artisans Hopfab"
    />
  );
};

export default NotreMissionIllustration4Image;

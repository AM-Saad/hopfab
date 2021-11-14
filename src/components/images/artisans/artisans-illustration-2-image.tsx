import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ArtisansIllustration2Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: {
          eq: "artisans/agencement-appartement-hopfab.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 564, height: 760, layout: CONSTRAINED)
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
      alt="Habillage de bar et mural en sapin réalisé par des artisans Hopfab"
    />
  );
};

export default ArtisansIllustration2Image;

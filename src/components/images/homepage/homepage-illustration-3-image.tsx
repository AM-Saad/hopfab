import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HomepageIllustration3Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { eq: "homepage/artisans-hopfab-souffleurs-de-verre.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 581, height: 757, layout: CONSTRAINED)
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
      alt="Artisans hopfab, souffleurs de verre"
    />
  );
};

export default HomepageIllustration3Image;

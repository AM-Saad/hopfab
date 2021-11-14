import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const QuiSommesNousIllustration4Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: {
          eq: "qui-sommes-nous/agencement-separation-en-bois.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 536, height: 700, layout: CONSTRAINED)
        }
      }
    }
  `);

  const placeholderImage = getImage(data.placeholderImage);

  if (!placeholderImage) {
    return <div>Image non trouvée</div>;
  }

  return (
    <GatsbyImage image={placeholderImage} alt="Agenceent séparation en bois" />
  );
};

export default QuiSommesNousIllustration4Image;

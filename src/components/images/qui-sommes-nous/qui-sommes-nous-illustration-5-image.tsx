import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const QuiSommesNousIllustration5Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: {
          eq: "qui-sommes-nous/artisans-hopfab-travaillant-sur-des-plans.jpg"
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
    <GatsbyImage
      image={placeholderImage}
      alt="Artisans Hopfab travaillant sur des plans"
    />
  );
};

export default QuiSommesNousIllustration5Image;

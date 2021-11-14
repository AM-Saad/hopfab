import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const QuiSommesNousIllustration2Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { eq: "qui-sommes-nous/agencement-appartement-hopfab.jpg" }
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
    <GatsbyImage image={placeholderImage} alt="Agencement Hopfab de bar" />
  );
};

export default QuiSommesNousIllustration2Image;

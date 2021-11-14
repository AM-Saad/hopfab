import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const QuiSommesNousIllustration3Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: { eq: "qui-sommes-nous/agencement-hopfab.jpg" }
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

  return <GatsbyImage image={placeholderImage} alt="Agencement Hopfab" />;
};

export default QuiSommesNousIllustration3Image;

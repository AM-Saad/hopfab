import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const NotreMissionIllustration1Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: {
          eq: "notre-mission/hopfab-table-a-manger-en-chene-massif.jpg"
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
      alt="Table à manger en chêne massif réalisé par un artisan Hopfab"
    />
  );
};

export default NotreMissionIllustration1Image;

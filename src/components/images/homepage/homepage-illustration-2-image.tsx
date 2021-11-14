import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HomepageIllustration2Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(
        relativePath: {
          eq: "homepage/artisan-travaillant-dans-son-atelier.jpg"
        }
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
      alt="Artisan travaillant dans son atelier"
    />
  );
};

export default HomepageIllustration2Image;

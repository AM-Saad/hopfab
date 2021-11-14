import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

const QuiSommesNousIllustration1Image = () => {
  const data = useStaticQuery(graphql`
    {
      largeImage: file(
        relativePath: {
          eq: "qui-sommes-nous/projet-d-amenagement-d-un-appartement-avec-les-artisans-hopfab.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1161, height: 750, layout: CONSTRAINED)
        }
      }
      smallImage: file(
        relativePath: {
          eq: "qui-sommes-nous/projet-d-amenagement-d-un-appartement-avec-les-artisans-hopfab.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 640, height: 743, layout: CONSTRAINED)
        }
      }
    }
  `);

  const largeImage = getImage(data.largeImage);
  const smallImage = getImage(data.smallImage);

  if (!largeImage || !smallImage) {
    return <div>Image non trouvée</div>;
  }

  const images = withArtDirection(largeImage, [
    {
      media: "(max-width: 639px)",
      image: smallImage,
    },
  ]);

  return (
    <GatsbyImage
      image={images}
      className="qui-sommes-nous-illustration-1-art-directed"
      alt="Projet d'aménagement d'un restaurant avec les artisans Hopfab"
    />
  );
};

export default QuiSommesNousIllustration1Image;

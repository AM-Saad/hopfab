import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

const QuiSommesNousIllustration6Image = () => {
  const data = useStaticQuery(graphql`
    {
      largeImage: file(
        relativePath: { eq: "qui-sommes-nous/hopfab-arnaud-et-geraldine.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1161, height: 508, layout: CONSTRAINED)
        }
      }
      smallImage: file(
        relativePath: { eq: "qui-sommes-nous/hopfab-arnaud-et-geraldine.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 640, height: 832, layout: CONSTRAINED)
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
      className="qui-sommes-nous-illustration-5-art-directed"
      alt="Arnaud et Géraldine, cofondateurs d'Hopfab"
    />
  );
};

export default QuiSommesNousIllustration6Image;

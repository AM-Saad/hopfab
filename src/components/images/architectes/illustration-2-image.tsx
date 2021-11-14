import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const HomepageIllustration1Image = () => {
  const data = useStaticQuery(graphql`
    {
      largeImage: file(
        relativePath: {
          eq: "architects/CHR.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 1161
            height: 1150
            quality: 90
            layout: CONSTRAINED
          )
        }
      }
      smallImage: file(
        relativePath: {
          eq: "architects/CHR.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            height: 1143
            quality: 90
            layout: CONSTRAINED
          )
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
          style={{ minHeight: '600px', maxHeight: '700px',}}
      image={images}
      className="homepage-illustration-1-art-directed"
      alt=""
    />
  );
};

export default HomepageIllustration1Image;

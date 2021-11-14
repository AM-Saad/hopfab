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
          eq: "events/Photo-left.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 1161
            height: 750
            quality: 90
            layout: CONSTRAINED
          )
        }
      }
      smallImage: file(
        relativePath: {
          eq: "events/Photo-left.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 640
            height: 743
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
      image={images}
          className="transform duration-200 ease-in-out scale-100 hover:scale-110 w-full overflow-hidden"
          alt="Photo-left.jpg"
    />
  );
};

export default HomepageIllustration1Image;

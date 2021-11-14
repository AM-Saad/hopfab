"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
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
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
    {
      largeImage: file(
        relativePath: {
          eq: "architects/architects-1.jpg"
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
          eq: "architects/architects-1.jpg"
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
    const largeImage = gatsby_plugin_image_1.getImage(data.largeImage);
    const smallImage = gatsby_plugin_image_1.getImage(data.smallImage);
    if (!largeImage || !smallImage) {
        return <div>Image non trouvée</div>;
    }
    const images = gatsby_plugin_image_1.withArtDirection(largeImage, [
        {
            media: "(max-width: 639px)",
            image: smallImage,
        },
    ]);
    return (<gatsby_plugin_image_1.GatsbyImage style={{ minHeight: '600px', maxHeight: '700px', }} image={images} className="homepage-illustration-1-art-directed" alt=""/>);
};
exports.default = HomepageIllustration1Image;

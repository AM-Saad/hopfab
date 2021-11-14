"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const QuiSommesNousIllustration6Image = () => {
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
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
    return (<gatsby_plugin_image_1.GatsbyImage image={images} className="qui-sommes-nous-illustration-5-art-directed" alt="Arnaud et Géraldine, cofondateurs d'Hopfab"/>);
};
exports.default = QuiSommesNousIllustration6Image;

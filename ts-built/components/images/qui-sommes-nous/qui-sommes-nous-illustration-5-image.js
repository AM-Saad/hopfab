"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const QuiSommesNousIllustration5Image = () => {
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
    {
      placeholderImage: file(
        relativePath: {
          eq: "qui-sommes-nous/artisans-hopfab-travaillant-sur-des-plans.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 536, height: 700, layout: CONSTRAINED)
        }
      }
    }
  `);
    const placeholderImage = gatsby_plugin_image_1.getImage(data.placeholderImage);
    if (!placeholderImage) {
        return <div>Image non trouvée</div>;
    }
    return (<gatsby_plugin_image_1.GatsbyImage image={placeholderImage} alt="Artisans Hopfab travaillant sur des plans"/>);
};
exports.default = QuiSommesNousIllustration5Image;

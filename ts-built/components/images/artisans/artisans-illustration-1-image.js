"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const ArtisansIllustration1Image = () => {
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
    {
      placeholderImage: file(
        relativePath: {
          eq: "artisans/artisan-en-train-de-travailler-dans-son-atelier.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 536, height: 760, layout: CONSTRAINED)
        }
      }
    }
  `);
    const placeholderImage = gatsby_plugin_image_1.getImage(data.placeholderImage);
    if (!placeholderImage) {
        return <div>Image non trouvée</div>;
    }
    return (<gatsby_plugin_image_1.GatsbyImage image={placeholderImage} alt="Menuisiers travaillant dans leur atelier"/>);
};
exports.default = ArtisansIllustration1Image;

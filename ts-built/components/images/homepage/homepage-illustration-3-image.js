"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const HomepageIllustration3Image = () => {
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
    {
      placeholderImage: file(
        relativePath: { eq: "homepage/artisans-hopfab-souffleurs-de-verre.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 581, height: 757, layout: CONSTRAINED)
        }
      }
    }
  `);
    const placeholderImage = gatsby_plugin_image_1.getImage(data.placeholderImage);
    if (!placeholderImage) {
        return <div>Image non trouvée</div>;
    }
    return (<gatsby_plugin_image_1.GatsbyImage image={placeholderImage} alt="Artisans hopfab, souffleurs de verre"/>);
};
exports.default = HomepageIllustration3Image;

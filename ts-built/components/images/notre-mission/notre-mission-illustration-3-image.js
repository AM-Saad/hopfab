"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const NotreMissionIllustration3Image = () => {
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
    {
      placeholderImage: file(
        relativePath: {
          eq: "notre-mission/agencement-d-un-cafe-par-les-artisans-menuisier-hopfab.jpg"
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
    return (<gatsby_plugin_image_1.GatsbyImage image={placeholderImage} alt="Agencement d'un café par les artisans menuisier Hopfab"/>);
};
exports.default = NotreMissionIllustration3Image;

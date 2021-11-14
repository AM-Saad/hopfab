"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var QuiSommesNousIllustration1Image = function () {
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    {\n      largeImage: file(\n        relativePath: {\n          eq: \"qui-sommes-nous/projet-d-amenagement-d-un-appartement-avec-les-artisans-hopfab.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(width: 1161, height: 750, layout: CONSTRAINED)\n        }\n      }\n      smallImage: file(\n        relativePath: {\n          eq: \"qui-sommes-nous/projet-d-amenagement-d-un-appartement-avec-les-artisans-hopfab.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(width: 640, height: 743, layout: CONSTRAINED)\n        }\n      }\n    }\n  "], ["\n    {\n      largeImage: file(\n        relativePath: {\n          eq: \"qui-sommes-nous/projet-d-amenagement-d-un-appartement-avec-les-artisans-hopfab.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(width: 1161, height: 750, layout: CONSTRAINED)\n        }\n      }\n      smallImage: file(\n        relativePath: {\n          eq: \"qui-sommes-nous/projet-d-amenagement-d-un-appartement-avec-les-artisans-hopfab.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(width: 640, height: 743, layout: CONSTRAINED)\n        }\n      }\n    }\n  "]))));
    var largeImage = gatsby_plugin_image_1.getImage(data.largeImage);
    var smallImage = gatsby_plugin_image_1.getImage(data.smallImage);
    if (!largeImage || !smallImage) {
        return <div>Image non trouvée</div>;
    }
    var images = gatsby_plugin_image_1.withArtDirection(largeImage, [
        {
            media: "(max-width: 639px)",
            image: smallImage,
        },
    ]);
    return (<gatsby_plugin_image_1.GatsbyImage image={images} className="qui-sommes-nous-illustration-1-art-directed" alt="Projet d'aménagement d'un restaurant avec les artisans Hopfab"/>);
};
exports.default = QuiSommesNousIllustration1Image;
var templateObject_1;
//# sourceMappingURL=qui-sommes-nous-illustration-1-image.jsx.map
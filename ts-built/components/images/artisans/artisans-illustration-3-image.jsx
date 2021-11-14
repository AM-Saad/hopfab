"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var ArtisansIllustration3Image = function () {
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    {\n      placeholderImage: file(\n        relativePath: {\n          eq: \"artisans/escalier-realise-par-les-artisans-hopfab.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(width: 564, height: 760, layout: CONSTRAINED)\n        }\n      }\n    }\n  "], ["\n    {\n      placeholderImage: file(\n        relativePath: {\n          eq: \"artisans/escalier-realise-par-les-artisans-hopfab.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(width: 564, height: 760, layout: CONSTRAINED)\n        }\n      }\n    }\n  "]))));
    var placeholderImage = gatsby_plugin_image_1.getImage(data.placeholderImage);
    if (!placeholderImage) {
        return <div>Image non trouvée</div>;
    }
    return (<gatsby_plugin_image_1.GatsbyImage image={placeholderImage} alt="Escalier réalisé par des artisans Hopfab"/>);
};
exports.default = ArtisansIllustration3Image;
var templateObject_1;
//# sourceMappingURL=artisans-illustration-3-image.jsx.map
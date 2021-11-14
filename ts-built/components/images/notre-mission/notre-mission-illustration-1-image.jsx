"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var NotreMissionIllustration1Image = function () {
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    {\n      placeholderImage: file(\n        relativePath: {\n          eq: \"notre-mission/hopfab-table-a-manger-en-chene-massif.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(width: 536, height: 760, layout: CONSTRAINED)\n        }\n      }\n    }\n  "], ["\n    {\n      placeholderImage: file(\n        relativePath: {\n          eq: \"notre-mission/hopfab-table-a-manger-en-chene-massif.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(width: 536, height: 760, layout: CONSTRAINED)\n        }\n      }\n    }\n  "]))));
    var placeholderImage = gatsby_plugin_image_1.getImage(data.placeholderImage);
    if (!placeholderImage) {
        return <div>Image non trouvée</div>;
    }
    return (<gatsby_plugin_image_1.GatsbyImage image={placeholderImage} alt="Table à manger en chêne massif réalisé par un artisan Hopfab"/>);
};
exports.default = NotreMissionIllustration1Image;
var templateObject_1;
//# sourceMappingURL=notre-mission-illustration-1-image.jsx.map
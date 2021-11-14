"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
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
var HomepageIllustration1Image = function () {
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    {\n      largeImage: file(\n        relativePath: {\n          eq: \"events/septembre-2021-1.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(\n            width: 1161\n            height: 750\n            quality: 90\n            layout: CONSTRAINED\n          )\n        }\n      }\n      smallImage: file(\n        relativePath: {\n          eq: \"events/septembre-2021-1.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(\n            width: 640\n            height: 743\n            quality: 90\n            layout: CONSTRAINED\n          )\n        }\n      }\n    }\n  "], ["\n    {\n      largeImage: file(\n        relativePath: {\n          eq: \"events/septembre-2021-1.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(\n            width: 1161\n            height: 750\n            quality: 90\n            layout: CONSTRAINED\n          )\n        }\n      }\n      smallImage: file(\n        relativePath: {\n          eq: \"events/septembre-2021-1.jpg\"\n        }\n      ) {\n        childImageSharp {\n          gatsbyImageData(\n            width: 640\n            height: 743\n            quality: 90\n            layout: CONSTRAINED\n          )\n        }\n      }\n    }\n  "]))));
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
    return (<gatsby_plugin_image_1.GatsbyImage image={images} className="transform duration-200 ease-in-out scale-100 hover:scale-110 w-full  overflow-hidden" alt="septembre-2021-1.jpg"/>);
};
exports.default = HomepageIllustration1Image;
var templateObject_1;
//# sourceMappingURL=homepage-event-2-image.jsx.map
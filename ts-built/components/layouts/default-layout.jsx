"use strict";
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var react_cookie_1 = require("react-cookie");
var main_header_1 = require("./main-header");
var main_footer_1 = require("./main-footer");
var cookie_banner_1 = require("./cookie-banner");
var browse_happy_1 = require("./browse-happy");
var DefaultLayout = function (_a) {
    var _b;
    var children = _a.children;
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query defaultSiteTitleQuery {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n    }\n  "], ["\n    query defaultSiteTitleQuery {\n      site {\n        siteMetadata {\n          title\n        }\n      }\n    }\n  "]))));
    return (<>
      <browse_happy_1.default />
      <main_header_1.default siteTitle={((_b = data.site.siteMetadata) === null || _b === void 0 ? void 0 : _b.title) || "Titre"}/>
      <main className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5">
        {children}
      </main>
      <main_footer_1.default />
      <react_cookie_1.CookiesProvider>
        <cookie_banner_1.default />
      </react_cookie_1.CookiesProvider>
    </>);
};
exports.default = DefaultLayout;
var templateObject_1;
//# sourceMappingURL=default-layout.jsx.map
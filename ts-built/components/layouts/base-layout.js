"use strict";
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const react_cookie_1 = require("react-cookie");
const main_header_1 = require("./main-header");
const main_footer_1 = require("./main-footer");
const cookie_banner_1 = require("./cookie-banner");
const browse_happy_1 = require("./browse-happy");
const BaseLayout = ({ children, theme }) => {
    var _a;
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
    return (<>
      <browse_happy_1.default />
      <main_header_1.default siteTitle={((_a = data.site.siteMetadata) === null || _a === void 0 ? void 0 : _a.title) || `Titre`}/>
      <main>{children}</main>
      <main_footer_1.default theme={theme}/>
      <react_cookie_1.CookiesProvider>
        <cookie_banner_1.default />
      </react_cookie_1.CookiesProvider>
    </>);
};
exports.default = BaseLayout;

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CookiesProvider } from "react-cookie";

import MainHeader from "./main-header";
import MainFooter from "./main-footer";
import CookieBanner from "./cookie-banner";
import BrowseHappy from "./browse-happy";

type DataProps = {
  children: JSX.Element | JSX.Element[];
  theme?: "brown";
};

const BaseLayout: React.FC<DataProps> = ({ children, theme }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <BrowseHappy />
      <MainHeader siteTitle={data.site.siteMetadata?.title || `Titre`} />
      <main>{children}</main>
      <MainFooter theme={theme} />
      <CookiesProvider>
        <CookieBanner />
      </CookiesProvider>
    </>
  );
};

export default BaseLayout;

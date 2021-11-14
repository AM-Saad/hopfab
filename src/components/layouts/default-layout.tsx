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
};

const DefaultLayout: React.FC<DataProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query defaultSiteTitleQuery {
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
      <main className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5">
        {children}
      </main>
      <MainFooter />
      <CookiesProvider>
        <CookieBanner />
      </CookiesProvider>
    </>
  );
};

export default DefaultLayout;

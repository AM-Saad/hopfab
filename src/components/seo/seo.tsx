import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import Facebook from "./facebook";
import Twitter from "./twitter";
import BasisGrotesqueProRegular from "../../fonts/BasisGrotesquePro-Regular.woff2";
import BasisGrotesqueProBold from "../../fonts/BasisGrotesquePro-Bold.woff2";

type DataProps = {
  title?: string;
  desc?: string;
  banner?: string;
  pathname?: string;
  article?: boolean;
  node?: {
    first_publication_date: string;
    last_publication_date: string;
  };
};

const SEO: React.FC<DataProps> = ({
  title = null,
  desc = null,
  banner = null,
  pathname = null,
  article = false,
  node = null,
}) => {
  const { site } = useStaticQuery(query);

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      headline,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
      facebook,
    },
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ""}`,
  };

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      "@type": "Organization",
      name: author,
    },
    copyrightHolder: {
      "@type": "Organization",
      name: author,
    },
    copyrightYear: new Date().getFullYear(),
    creator: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: author,
    },
    datePublished: "2021-01-01T10:30:00+01:00",
    dateModified: buildTime,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${defaultBanner}`,
    },
  };

  // Initial breadcrumb list

  const itemListElement = [
    {
      "@type": "ListItem",
      item: {
        "@id": siteUrl,
        name: `Page d'accueil`,
      },
      position: 1,
    },
  ];

  let schemaArticle = null;

  if (article) {
    schemaArticle = {
      "@context": "http://schema.org",
      "@type": "Article",
      author: {
        "@type": "Organization",
        name: author,
      },
      copyrightHolder: {
        "@type": "Organization",
        name: author,
      },
      copyrightYear: new Date().getFullYear(),
      creator: {
        "@type": "Organization",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: author,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo-hopfab-square.png`,
        },
      },
      datePublished: node.first_publication_date,
      dateModified: node.last_publication_date,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        "@type": "ImageObject",
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    };
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      "@type": "ListItem",
      item: {
        "@id": seo.url,
        name: seo.title,
      },
      position: 2,
    });
  }

  const breadcrumb = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    description: "Breadcrumbs list",
    name: "Breadcrumbs",
    itemListElement,
  };

  return (
    <>
      <Helmet
        title={seo.title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      >
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        {article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>

        <link
          rel="preload"
          as="font"
          href={BasisGrotesqueProRegular}
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href={BasisGrotesqueProBold}
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? "article" : "website"}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitter}
      />
    </>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        headline
        siteLanguage
        ogLanguage
        author
        twitter
        facebook
      }
    }
  }
`;

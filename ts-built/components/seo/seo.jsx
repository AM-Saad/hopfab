"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_helmet_1 = require("react-helmet");
var gatsby_1 = require("gatsby");
var facebook_1 = require("./facebook");
var twitter_1 = require("./twitter");
var BasisGrotesquePro_Regular_woff2_1 = require("../../fonts/BasisGrotesquePro-Regular.woff2");
var BasisGrotesquePro_Bold_woff2_1 = require("../../fonts/BasisGrotesquePro-Bold.woff2");
var SEO = function (_a) {
    var _b = _a.title, title = _b === void 0 ? null : _b, _c = _a.desc, desc = _c === void 0 ? null : _c, _d = _a.banner, banner = _d === void 0 ? null : _d, _e = _a.pathname, pathname = _e === void 0 ? null : _e, _f = _a.article, article = _f === void 0 ? false : _f, _g = _a.node, node = _g === void 0 ? null : _g;
    var site = gatsby_1.useStaticQuery(query).site;
    var buildTime = site.buildTime, _h = site.siteMetadata, siteUrl = _h.siteUrl, defaultTitle = _h.defaultTitle, defaultDescription = _h.defaultDescription, defaultBanner = _h.defaultBanner, headline = _h.headline, siteLanguage = _h.siteLanguage, ogLanguage = _h.ogLanguage, author = _h.author, twitter = _h.twitter, facebook = _h.facebook;
    var seo = {
        title: title || defaultTitle,
        description: desc || defaultDescription,
        image: "" + siteUrl + (banner || defaultBanner),
        url: "" + siteUrl + (pathname || ""),
    };
    // schema.org in JSONLD format
    // https://developers.google.com/search/docs/guides/intro-structured-data
    // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')
    var schemaOrgWebPage = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        url: siteUrl,
        headline: headline,
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
            url: "" + siteUrl + defaultBanner,
        },
    };
    // Initial breadcrumb list
    var itemListElement = [
        {
            "@type": "ListItem",
            item: {
                "@id": siteUrl,
                name: "Page d'accueil",
            },
            position: 1,
        },
    ];
    var schemaArticle = null;
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
                    url: siteUrl + "/logo-hopfab-square.png",
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
    var breadcrumb = {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        description: "Breadcrumbs list",
        name: "Breadcrumbs",
        itemListElement: itemListElement,
    };
    return (<>
      <react_helmet_1.Helmet title={seo.title} titleTemplate={defaultTitle ? "%s | " + defaultTitle : null}>
        <html lang={siteLanguage}/>
        <meta name="description" content={seo.description}/>
        <meta name="image" content={seo.image}/>
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && (<script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>)}
        {article && (<script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>)}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>

        <link rel="preload" as="font" href={BasisGrotesquePro_Regular_woff2_1.default} type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" as="font" href={BasisGrotesquePro_Bold_woff2_1.default} type="font/woff2" crossOrigin="anonymous"/>
      </react_helmet_1.Helmet>
      <facebook_1.default desc={seo.description} image={seo.image} title={seo.title} type={article ? "article" : "website"} url={seo.url} locale={ogLanguage} name={facebook}/>
      <twitter_1.default title={seo.title} image={seo.image} desc={seo.description} username={twitter}/>
    </>);
};
exports.default = SEO;
var query = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query SEO {\n    site {\n      buildTime(formatString: \"YYYY-MM-DD\")\n      siteMetadata {\n        siteUrl\n        defaultTitle: title\n        defaultDescription: description\n        defaultBanner: banner\n        headline\n        siteLanguage\n        ogLanguage\n        author\n        twitter\n        facebook\n      }\n    }\n  }\n"], ["\n  query SEO {\n    site {\n      buildTime(formatString: \"YYYY-MM-DD\")\n      siteMetadata {\n        siteUrl\n        defaultTitle: title\n        defaultDescription: description\n        defaultBanner: banner\n        headline\n        siteLanguage\n        ogLanguage\n        author\n        twitter\n        facebook\n      }\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=seo.jsx.map
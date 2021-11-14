require("dotenv").config({
  path: `.env.development`,
});

console.log(`Picked .env.${process.env.NODE_ENV} configuration file`);

const buffer = Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT, "base64");
const GOOGLE_SERVICE_ACCOUNT = buffer.toString("utf-8");
const website = require("./config/website");

const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix;

module.exports = {
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ["auto", "webp"],
          placeholder: "tracedSVG",
        },  
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
          process.env.WPGRAPHQL_URL || `http://localhost:7999/graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit: process.env.WP_POST_LIMIT
              ? // Lets just pull x posts in development to make it easy on ourselves (aka. faster).
                parseInt(process.env.WP_POST_LIMIT)
              : // and we don't actually need more than 5000 in production for this particular site
                5000,
          },
        },
        html: {
          useGatsbyImage: false,
        },
      },
    },
    {
      resolve: `@davidrouyer/gatsby-source-google-spreadsheets`,
      options: {
        spreadsheetId: "1F7UoJGsivnKj2evKOoEZmtYofsJ16Bb6BwOoT_H4rqA",
        includedWorksheets: ["Projets Site"],
        type: {
          "Projets Site": {
            limit: process.env.GOOGLE_SHEET_ROW_LIMIT
              ? // Lets just pull x projects in development to make it easy on ourselves (aka. faster).
                parseInt(process.env.GOOGLE_SHEET_ROW_LIMIT)
              : // and we don't actually need more than 5000 in production for this particular site
                5000,
          },
        },
        credentials: JSON.parse(GOOGLE_SERVICE_ACCOUNT),
      },
    },
    {
      resolve: `@davidrouyer/gatsby-source-google-spreadsheets`,
      options: {
        spreadsheetId: "19E4Qud-y0_kl2CCvWJY1pxfg_XdO5Xoy5qsiH-Qsrcw",
        includedWorksheets: ["Matériauthèque Site"],
        type: {
          "Matériauthèque Site": {
            limit: process.env.GOOGLE_SHEET_ROW_LIMIT
              ? // Lets just pull x materials in development to make it easy on ourselves (aka. faster).
                parseInt(process.env.GOOGLE_SHEET_ROW_LIMIT)
              : // and we don't actually need more than 5000 in production for this particular site
                5000,
          },
        },
        credentials: JSON.parse(GOOGLE_SERVICE_ACCOUNT),
      },
    },
    {
      resolve: `@davidrouyer/gatsby-source-custom-api`,
      options: {
        url: `${process.env.GATSBY_HOPFAB_REST_API_URL}/services`,
        rootKey: "services",
        schemas: {
          services: `
            id: String!,
            name: String!,
            humanName: String!,
            parentId: String,
            orderNr: Int!,
            isPublished: Boolean!
          `,
        },
      },
    },
    {
      resolve: `@davidrouyer/gatsby-source-custom-api`,
      options: {
        url: `${process.env.GATSBY_HOPFAB_REST_API_URL}/serviceTypes`,
        rootKey: "serviceTypes",
        schemas: {
          serviceTypes: `
            id: String!,
            name: String!,
            humanName: String!,
            parentId: String,
            orderNr: Int!,
            isPublished: Boolean!
          `,
        },
      },
    },
    {
      resolve: `@davidrouyer/gatsby-source-custom-api`,
      options: {
        url: `${process.env.GATSBY_HOPFAB_REST_API_URL}/typologies`,
        rootKey: "typologies",
        schemas: {
          typologies: `
            id: String!,
            name: String!,
            humanName: String!,
            parentId: String,
            orderNr: Int!,
            isPublished: Boolean!
          `,
        },
      },
      },
      {
        resolve: `@davidrouyer/gatsby-source-custom-api`,
        options: {
            url: `${process.env.GATSBY_HOPFAB_REST_API_URL}/professions`,
            rootKey: "professions",
            schemas: {
            professions: `
            id: String!,
            name: String!,
            humanName: String!,
            parentId: String,
            isPublished: Boolean!
          `,
              },
          },
      },
    {
      resolve: `@davidrouyer/gatsby-source-custom-api`,
      options: {
        url: `${process.env.GATSBY_HOPFAB_REST_API_URL}/priceranges`,
        rootKey: "priceRanges",
        schemas: {
          priceRanges: `
            id: String!,
            name: String!,
            humanName: String!,
            parentId: String,
            orderNr: Int!,
            isPublished: Boolean!
          `,
        },
      },
    },
    {
      resolve: `@davidrouyer/gatsby-source-custom-api`,
      options: {
        url: `${process.env.GATSBY_HOPFAB_REST_API_URL}/badges`,
        rootKey: "badges",
        schemas: {
          badges: `
            id: String!,
            name: String!,
            humanName: String!,
            parentId: String,
            orderNr: Int!,
            isPublished: Boolean!
          `,
        },
      },
    },
    {
      resolve: `@davidrouyer/gatsby-source-custom-api`,
      options: {
        url: `${process.env.GATSBY_HOPFAB_REST_API_URL}/materials`,
        rootKey: "materials",
        schemas: {
          materials: `
            id: String!,
            name: String!,
            humanName: String!,
            parentId: String,
            orderNr: Int!,
            isPublished: Boolean!
          `,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GATSBY_OLD_ANALYTICS_ID,
          process.env.GATSBY_ANALYTICS_ID
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: website.pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: `minimal-ui`,
        icon: website.favicon,
      },
    },
    // Must be placed at the end
    `gatsby-plugin-offline`,
    "gatsby-plugin-netlify",
  ],
};

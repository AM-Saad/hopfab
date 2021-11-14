module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Hopfab", // Navigation and Site Title
  titleAlt: "Hopfab", // Title for JSONLD
  description: `Le partenaire des architectes et des professionnels pour faciliter la réalisation des projets sur-mesure, de l'appel d'offres à la livraison !`,
  headline: "Le site officiel Hopfab", // Headline for schema.org JSONLD
  url: "https://hopfab.com", // Domain of your site. No trailing slash!
  siteLanguage: "fr", // Language Tag on <html> element
  logo: "/banner.jpg", // Used for SEO
  ogLanguage: "fr_FR", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/images/logo-hopfab-square.png", // Used for manifest favicon generation
  shortName: "Hopfab", // shortname for manifest. MUST be shorter than 12 characters
  author: "Hopfab", // Author for schemaORGJSONLD
  themeColor: "#2B2B2B",
  backgroundColor: "#F2F3EE",

  twitter: "@hopfab", // Twitter Username
  facebook: "hopfab", // Facebook Site Name
};

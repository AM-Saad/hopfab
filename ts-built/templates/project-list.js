"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const lodash_1 = require("lodash");
const string_1 = require("../utilities/string");
const base_layout_1 = require("../components/layouts/base-layout");
const seo_1 = require("../components/seo/seo");
const category_filters_1 = require("../components/category-filters");
const project_list_1 = require("../components/projects/project-list");
const why_hopfab_1 = require("../components/call-to-actions/why-hopfab");
const ProjectListTemplate = ({ data: { projets, typesDeProjetGroupStats, totalStats }, pageContext, }) => {
    var _a, _b;
    const typeDeProjet = (_b = (_a = pageContext.filters) === null || _a === void 0 ? void 0 : _a.typeDeProjet) === null || _b === void 0 ? void 0 : _b.eq;
    const typeDeProjetSlug = lodash_1.kebabCase(typeDeProjet);
    return (<base_layout_1.default theme="brown">
      <seo_1.default title={`${typeDeProjet ? `${typeDeProjet} - ` : ""}Réalisations`}/>
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5 pb-10">
        <div className="grid lg:grid-cols-12 mt-24">
          <div className="hidden lg:block font-bold text-5.5xl md:text-6xl lg:text-6.5xl xl:text-7.5xl">
            {projets.totalCount}
          </div>
          <div className="col-span-12 lg:col-span-11 md:ml-5 lg:ml-19 xl:ml-23 2xl:ml-28">
            <div className="grid grid-cols-5 lg:block">
              <div className="block lg:hidden font-bold text-5.5xl md:text-6xl lg:text-6.5xl xl:text-7.5xl">
                {projets.totalCount}
              </div>
              <div className="col-span-4 grid grid-cols-1 gap-4 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 md:gap-x-14 lg:gap-x-18 xl:gap-x-22 2xl:gap-x-24">
                  <h1 className="font-bold text-5.5xl md:text-6xl lg:text-6.5xl xl:text-7.5xl">
                    {typeDeProjet ? typeDeProjet : "Toutes nos réalisations"}
                  </h1>
                  <div>
                    <div className="hidden lg:block text-sm font-bold uppercase mt-12">
                      Filtrer les projets
                    </div>
                    <category_filters_1.default basePath="realisations" categoryName="type-de-projet" categoryStats={typesDeProjetGroupStats.group} selectedCategory={typeDeProjet} totalCount={totalStats.totalCount} className="mt-14"/>
                  </div>
                </div>
              </div>
            </div>
            <project_list_1.default initialProjects={projets.nodes} initialCurrentPage={pageContext.currentPage} totalPages={pageContext.totalPages} selectedCategory={typeDeProjetSlug}/>

            {pageContext.currentPage > 1 && (<gatsby_1.Link to={string_1.buildUriPage("realisations", pageContext.currentPage - 1, "type-de-projet", typeDeProjetSlug)} className="sr-only">
                Précédent
              </gatsby_1.Link>)}
            {pageContext.currentPage < pageContext.totalPages && (<gatsby_1.Link to={string_1.buildUriPage("realisations", pageContext.currentPage + 1, "type-de-projet", typeDeProjetSlug)} className="sr-only">
                Suivant
              </gatsby_1.Link>)}
          </div>
        </div>
      </div>
      <why_hopfab_1.default className="py-24 xl:py-28"/>
    </base_layout_1.default>);
};
exports.default = ProjectListTemplate;
exports.pageQuery = gatsby_1.graphql `
  query Projects(
    $limit: Int!
    $skip: Int!
    $filters: googleProjetsSiteSheetFilterInput
  ) {
    projets: allGoogleProjetsSiteSheet(
      limit: $limit
      skip: $skip
      filter: $filters
      sort: { fields: index, order: DESC }
    ) {
      nodes {
        id
        #idProjet
        fullPath: lienSiteHopfab
        prestations
        titre
        titreDescriptif
        architecte
        client
        prestationsPrincipales
        description
        photo1Description
        photo1Image {
          childImageSharp {
            gatsbyImageData(width: 640, height: 836, layout: CONSTRAINED)
          }
        }
      }
      totalCount
    }
    typesDeProjetGroupStats: allGoogleProjetsSiteSheet(
      filter: { lienSiteHopfab: { nin: [null] } }
    ) {
      group(field: typeDeProjet) {
        fieldValue
        totalCount
      }
    }
    totalStats: allGoogleProjetsSiteSheet(
      filter: { lienSiteHopfab: { nin: [null] } }
    ) {
      totalCount
    }
  }
`;

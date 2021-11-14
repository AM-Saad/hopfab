"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var lodash_1 = require("lodash");
var string_1 = require("../utilities/string");
var base_layout_1 = require("../components/layouts/base-layout");
var seo_1 = require("../components/seo/seo");
var category_filters_1 = require("../components/category-filters");
var project_list_1 = require("../components/projects/project-list");
var why_hopfab_1 = require("../components/call-to-actions/why-hopfab");
var ProjectListTemplate = function (_a) {
    var _b, _c;
    var _d = _a.data, projets = _d.projets, typesDeProjetGroupStats = _d.typesDeProjetGroupStats, totalStats = _d.totalStats, pageContext = _a.pageContext;
    var typeDeProjet = (_c = (_b = pageContext.filters) === null || _b === void 0 ? void 0 : _b.typeDeProjet) === null || _c === void 0 ? void 0 : _c.eq;
    var typeDeProjetSlug = lodash_1.kebabCase(typeDeProjet);
    return (<base_layout_1.default theme="brown">
      <seo_1.default title={(typeDeProjet ? typeDeProjet + " - " : "") + "R\u00E9alisations"}/>
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
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query Projects(\n    $limit: Int!\n    $skip: Int!\n    $filters: googleProjetsSiteSheetFilterInput\n  ) {\n    projets: allGoogleProjetsSiteSheet(\n      limit: $limit\n      skip: $skip\n      filter: $filters\n      sort: { fields: index, order: DESC }\n    ) {\n      nodes {\n        id\n        #idProjet\n        fullPath: lienSiteHopfab\n        prestations\n        titre\n        titreDescriptif\n        architecte\n        client\n        prestationsPrincipales\n        description\n        photo1Description\n        photo1Image {\n          childImageSharp {\n            gatsbyImageData(width: 640, height: 836, layout: CONSTRAINED)\n          }\n        }\n      }\n      totalCount\n    }\n    typesDeProjetGroupStats: allGoogleProjetsSiteSheet(\n      filter: { lienSiteHopfab: { nin: [null] } }\n    ) {\n      group(field: typeDeProjet) {\n        fieldValue\n        totalCount\n      }\n    }\n    totalStats: allGoogleProjetsSiteSheet(\n      filter: { lienSiteHopfab: { nin: [null] } }\n    ) {\n      totalCount\n    }\n  }\n"], ["\n  query Projects(\n    $limit: Int!\n    $skip: Int!\n    $filters: googleProjetsSiteSheetFilterInput\n  ) {\n    projets: allGoogleProjetsSiteSheet(\n      limit: $limit\n      skip: $skip\n      filter: $filters\n      sort: { fields: index, order: DESC }\n    ) {\n      nodes {\n        id\n        #idProjet\n        fullPath: lienSiteHopfab\n        prestations\n        titre\n        titreDescriptif\n        architecte\n        client\n        prestationsPrincipales\n        description\n        photo1Description\n        photo1Image {\n          childImageSharp {\n            gatsbyImageData(width: 640, height: 836, layout: CONSTRAINED)\n          }\n        }\n      }\n      totalCount\n    }\n    typesDeProjetGroupStats: allGoogleProjetsSiteSheet(\n      filter: { lienSiteHopfab: { nin: [null] } }\n    ) {\n      group(field: typeDeProjet) {\n        fieldValue\n        totalCount\n      }\n    }\n    totalStats: allGoogleProjetsSiteSheet(\n      filter: { lienSiteHopfab: { nin: [null] } }\n    ) {\n      totalCount\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=project-list.jsx.map
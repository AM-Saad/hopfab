"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var architect_projects_item_1 = require("./architect-projects-item");
var ComponentName = function () {
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query AllArchitectProjects {\n    allarchitectprojets: allGoogleProjetsSiteSheet {\n      nodes {\n        id\n        #idProjet\n        fullPath: lienSiteHopfab\n        prestations\n        titre\n        titreDescriptif\n        architecte\n        client\n        prestationsPrincipales\n        description\n        photo1Description\n        photo1Image {\n          childImageSharp {\n            gatsbyImageData(width: 560, height: 640, layout: CONSTRAINED)\n          }\n        }\n      }\n      totalCount\n    }\n  }\n  "], ["\n    query AllArchitectProjects {\n    allarchitectprojets: allGoogleProjetsSiteSheet {\n      nodes {\n        id\n        #idProjet\n        fullPath: lienSiteHopfab\n        prestations\n        titre\n        titreDescriptif\n        architecte\n        client\n        prestationsPrincipales\n        description\n        photo1Description\n        photo1Image {\n          childImageSharp {\n            gatsbyImageData(width: 560, height: 640, layout: CONSTRAINED)\n          }\n        }\n      }\n      totalCount\n    }\n  }\n  "]))));
    var projects = data.allarchitectprojets.nodes;
    return (<div className="projects-section_items grid sm:grid-cols-1 md:gap-x-16 ">
            {<architect_projects_item_1.default key={projects[0].id} projet={projects[0]} className={""}/>}

     
        </div>);
};
exports.default = ComponentName;
var templateObject_1;
//# sourceMappingURL=architect-projects.jsx.map
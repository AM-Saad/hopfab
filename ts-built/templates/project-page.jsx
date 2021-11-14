"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var html_react_parser_1 = require("html-react-parser");
var base_layout_1 = require("../components/layouts/base-layout");
var seo_1 = require("../components/seo/seo");
var project_photos_1 = require("../components/projects/project-photos");
var ready_to_discuss_1 = require("../components/ready-to-discuss");
var ProjectPageTemplate = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var projet = _a.data.projet;
    var ateliers = (_c = (_b = projet.artisans) === null || _b === void 0 ? void 0 : _b.split(",").filter(function (p) { return p && p.length > 0; }).map(function (artisan) { return artisan.trim(); })) !== null && _c !== void 0 ? _c : [];
    var metiers = (_e = (_d = projet.metiers) === null || _d === void 0 ? void 0 : _d.split(",").filter(function (m) { return m && m.length > 0; }).map(function (m) { return m.trim(); })) !== null && _e !== void 0 ? _e : [];
    var prestations = (_g = (_f = projet.prestations) === null || _f === void 0 ? void 0 : _f.split(",").filter(function (p) { return p && p.length > 0; }).map(function (p) { return p.trim(); })) !== null && _g !== void 0 ? _g : [];
    var materiaux = (_j = (_h = projet.materiaux) === null || _h === void 0 ? void 0 : _h.split(",").filter(function (m) { return m && m.length > 0; }).map(function (m) { return m.trim(); })) !== null && _j !== void 0 ? _j : [];
    var photo1Image = gatsby_plugin_image_1.getImage(projet.photo1Image);
    var photo2Image = gatsby_plugin_image_1.getImage(projet.photo2Image);
    var photo3Image = gatsby_plugin_image_1.getImage(projet.photo3Image);
    var photo4Image = gatsby_plugin_image_1.getImage(projet.photo4Image);
    var photo5Image = gatsby_plugin_image_1.getImage(projet.photo5Image);
    var photo6Image = gatsby_plugin_image_1.getImage(projet.photo6Image);
    var photo7Image = gatsby_plugin_image_1.getImage(projet.photo7Image);
    var photo8Image = gatsby_plugin_image_1.getImage(projet.photo8Image);
    var photo9Image = gatsby_plugin_image_1.getImage(projet.photo9Image);
    var photo10Image = gatsby_plugin_image_1.getImage(projet.photo10Image);
    var remainingPhotos = [];
    if (photo4Image) {
        remainingPhotos.push({
            image: photo4Image,
            alt: projet.photo4Description,
        });
    }
    if (photo5Image) {
        remainingPhotos.push({
            image: photo5Image,
            alt: projet.photo5Description,
        });
    }
    if (photo6Image) {
        remainingPhotos.push({
            image: photo6Image,
            alt: projet.photo6Description,
        });
    }
    if (photo7Image) {
        remainingPhotos.push({
            image: photo7Image,
            alt: projet.photo7Description,
        });
    }
    if (photo8Image) {
        remainingPhotos.push({
            image: photo8Image,
            alt: projet.photo8Description,
        });
    }
    if (photo9Image) {
        remainingPhotos.push({
            image: photo9Image,
            alt: projet.photo9Description,
        });
    }
    if (photo10Image) {
        remainingPhotos.push({
            image: photo10Image,
            alt: projet.photo10Description,
        });
    }
    return (<base_layout_1.default theme="brown">
      <seo_1.default title={projet.titreDescriptif} desc={projet.metaDescription} banner={gatsby_plugin_image_1.getSrc(projet.photo1Image)}/>
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5 pt-18">
        <h1 className="uppercase font-bold text-5.5xl sm:text-7xl lg:text-9.5xl border-b border-gris-800 py-8">
          {projet.titre}
        </h1>
        <dl className="uppercase text-sm my-5">
          <div className="flex">
            <dt className="mr-1">Catégorie</dt>
            <dd className="font-bold">{projet.typeDeProjet}</dd>
          </div>
          {projet.architecte ? (<div className="flex">
              <dt className="mr-1">Par</dt>
              <dd className="font-bold">{projet.architecte}</dd>
            </div>) : (<></>)}
        </dl>

        {photo1Image && (<gatsby_plugin_image_1.GatsbyImage image={photo1Image} alt={projet.photo1Description}/>)}

        <div className="uppercase text-sm grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-28 pt-4">
          <div className="font-bold">Artisans Hopfab</div>
          <div>
            {ateliers.map(function (atelier, index) { return (<div key={index} className="flex flex-wrap">
                <div className="font-bold mr-1">{atelier}</div>
                <div>{metiers[index] ? metiers[index] : ""}</div>
              </div>); })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-28 pt-40 pb-16">
          <div className="flex flex-col justify-between">
            <div className="text-5.5xl font-bold">{projet.titreDescriptif}</div>
            <div className="mt-8">
              {projet.architecte && (<dl className="uppercase text-sm">
                  <dt className="inline font-bold mr-1">Architecte</dt>
                  <dd className="inline">{projet.architecte}</dd>
                </dl>)}
              {projet.departement && (<dl className="uppercase text-sm">
                  <dt className="inline font-bold mr-1">Lieu</dt>
                  <dd className="inline">{projet.departement}</dd>
                </dl>)}
              {projet.creditPhoto && (<dl className="uppercase text-sm">
                  <dt className="inline font-bold mr-1">Credits photo</dt>
                  <dd className="inline">{projet.creditPhoto}</dd>
                </dl>)}
            </div>
          </div>

          <p className="text-1xl">
            {html_react_parser_1.default((_l = (_k = projet.description) === null || _k === void 0 ? void 0 : _k.replace(/(\n)/g, "<br/>")) !== null && _l !== void 0 ? _l : "")}
          </p>
        </div>

        {photo2Image && (<gatsby_plugin_image_1.GatsbyImage image={photo2Image} alt={projet.photo2Description}/>)}

        {projet.temoignage ? (<div className="max-w-3xl mx-auto py-40">
            <div className="font-serif text-2.5xl md:text-4.5xl leading-snug md:leading-tight pb-10">
              {projet.temoignage}
            </div>
            <div className="uppercase text-sm">
              <span className="font-bold">
                {(_m = projet.temoignageAuteur) === null || _m === void 0 ? void 0 : _m.trim()}
              </span>
              {", "}
              {(_o = projet.temoignageFonctionAuteur) === null || _o === void 0 ? void 0 : _o.trim()}
            </div>
          </div>) : (<> </>)}

        <div className="flex justify-end pb-48">
          {photo3Image && (<gatsby_plugin_image_1.GatsbyImage image={photo3Image} alt={projet.photo3Description}/>)}
        </div>

        <div className="mb-8">
          {remainingPhotos && remainingPhotos.length === 1 && (<gatsby_plugin_image_1.GatsbyImage image={remainingPhotos[0].image} alt={remainingPhotos[0].alt}/>)}
          {remainingPhotos && remainingPhotos.length > 1 && (<project_photos_1.default slides={remainingPhotos}/>)}
        </div>

        <div className="mb-40">
          <dl className="uppercase text-sm">
            {projet.prestations && (<div>
                <dt className="inline font-bold mr-1">Prestations</dt>
                <dd className="inline">
                  {prestations.map(function (prestation, index) { return (<span key={index}>
                      {prestation}
                      {index < prestations.length - 1 && ", "}
                    </span>); })}
                </dd>
              </div>)}
            {projet.metiers && (<div>
                <dt className="inline font-bold mr-1">Métiers</dt>
                <dd className="inline">
                  {metiers.map(function (metier, index) { return (<span key={index}>
                      {metier}
                      {index < metiers.length - 1 && ", "}
                    </span>); })}
                </dd>
              </div>)}
            {projet.materiaux && (<div>
                <dt className="inline font-bold mr-1">Matériaux</dt>
                <dd className="inline">
                  {materiaux.map(function (materiau, index) { return (<span key={index}>
                      {materiau}
                      {index < materiaux.length - 1 && ", "}
                    </span>); })}
                </dd>
              </div>)}
          </dl>
        </div>
      </div>
      <ready_to_discuss_1.default />
    </base_layout_1.default>);
};
exports.default = ProjectPageTemplate;
exports.pageQuery = gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query ProjectById($id: String!) {\n    projet: googleProjetsSiteSheet(id: { eq: $id }) {\n      id\n      #idProjet\n      typeDeProjet\n      prestations\n      departement\n      titre\n      titreDescriptif\n      description\n      #metaDescription\n      artisans\n      metiers\n      materiaux\n      architecte\n      temoignage\n      temoignageAuteur\n      temoignageFonctionAuteur\n      creditPhoto\n      photo1Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo1Description\n      photo2Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo2Description\n      photo3Image {\n        childImageSharp {\n          gatsbyImageData(width: 536, height: 700, layout: FIXED)\n        }\n      }\n      photo3Description\n      photo4Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo4Description\n      photo5Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo5Description\n      photo6Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo6Description\n      photo7Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo7Description\n      photo8Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo8Description\n      photo9Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo9Description\n      photo10Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo10Description\n    }\n  }\n"], ["\n  query ProjectById($id: String!) {\n    projet: googleProjetsSiteSheet(id: { eq: $id }) {\n      id\n      #idProjet\n      typeDeProjet\n      prestations\n      departement\n      titre\n      titreDescriptif\n      description\n      #metaDescription\n      artisans\n      metiers\n      materiaux\n      architecte\n      temoignage\n      temoignageAuteur\n      temoignageFonctionAuteur\n      creditPhoto\n      photo1Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo1Description\n      photo2Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo2Description\n      photo3Image {\n        childImageSharp {\n          gatsbyImageData(width: 536, height: 700, layout: FIXED)\n        }\n      }\n      photo3Description\n      photo4Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo4Description\n      photo5Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo5Description\n      photo6Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo6Description\n      photo7Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo7Description\n      photo8Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo8Description\n      photo9Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo9Description\n      photo10Image {\n        childImageSharp {\n          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)\n        }\n      }\n      photo10Description\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=project-page.jsx.map
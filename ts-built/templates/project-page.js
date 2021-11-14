"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const html_react_parser_1 = require("html-react-parser");
const base_layout_1 = require("../components/layouts/base-layout");
const seo_1 = require("../components/seo/seo");
const project_photos_1 = require("../components/projects/project-photos");
const ready_to_discuss_1 = require("../components/ready-to-discuss");
const ProjectPageTemplate = ({ data: { projet }, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const ateliers = (_b = (_a = projet.artisans) === null || _a === void 0 ? void 0 : _a.split(",").filter(p => p && p.length > 0).map(artisan => artisan.trim())) !== null && _b !== void 0 ? _b : [];
    const metiers = (_d = (_c = projet.metiers) === null || _c === void 0 ? void 0 : _c.split(",").filter(m => m && m.length > 0).map(m => m.trim())) !== null && _d !== void 0 ? _d : [];
    const prestations = (_f = (_e = projet.prestations) === null || _e === void 0 ? void 0 : _e.split(",").filter(p => p && p.length > 0).map(p => p.trim())) !== null && _f !== void 0 ? _f : [];
    const materiaux = (_h = (_g = projet.materiaux) === null || _g === void 0 ? void 0 : _g.split(",").filter(m => m && m.length > 0).map(m => m.trim())) !== null && _h !== void 0 ? _h : [];
    const photo1Image = gatsby_plugin_image_1.getImage(projet.photo1Image);
    const photo2Image = gatsby_plugin_image_1.getImage(projet.photo2Image);
    const photo3Image = gatsby_plugin_image_1.getImage(projet.photo3Image);
    const photo4Image = gatsby_plugin_image_1.getImage(projet.photo4Image);
    const photo5Image = gatsby_plugin_image_1.getImage(projet.photo5Image);
    const photo6Image = gatsby_plugin_image_1.getImage(projet.photo6Image);
    const photo7Image = gatsby_plugin_image_1.getImage(projet.photo7Image);
    const photo8Image = gatsby_plugin_image_1.getImage(projet.photo8Image);
    const photo9Image = gatsby_plugin_image_1.getImage(projet.photo9Image);
    const photo10Image = gatsby_plugin_image_1.getImage(projet.photo10Image);
    const remainingPhotos = [];
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
            {ateliers.map((atelier, index) => (<div key={index} className="flex flex-wrap">
                <div className="font-bold mr-1">{atelier}</div>
                <div>{metiers[index] ? metiers[index] : ""}</div>
              </div>))}
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
            {html_react_parser_1.default((_k = (_j = projet.description) === null || _j === void 0 ? void 0 : _j.replace(/(\n)/g, "<br/>")) !== null && _k !== void 0 ? _k : "")}
          </p>
        </div>

        {photo2Image && (<gatsby_plugin_image_1.GatsbyImage image={photo2Image} alt={projet.photo2Description}/>)}

        {projet.temoignage ? (<div className="max-w-3xl mx-auto py-40">
            <div className="font-serif text-2.5xl md:text-4.5xl leading-snug md:leading-tight pb-10">
              {projet.temoignage}
            </div>
            <div className="uppercase text-sm">
              <span className="font-bold">
                {(_l = projet.temoignageAuteur) === null || _l === void 0 ? void 0 : _l.trim()}
              </span>
              {", "}
              {(_m = projet.temoignageFonctionAuteur) === null || _m === void 0 ? void 0 : _m.trim()}
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
                  {prestations.map((prestation, index) => (<span key={index}>
                      {prestation}
                      {index < prestations.length - 1 && ", "}
                    </span>))}
                </dd>
              </div>)}
            {projet.metiers && (<div>
                <dt className="inline font-bold mr-1">Métiers</dt>
                <dd className="inline">
                  {metiers.map((metier, index) => (<span key={index}>
                      {metier}
                      {index < metiers.length - 1 && ", "}
                    </span>))}
                </dd>
              </div>)}
            {projet.materiaux && (<div>
                <dt className="inline font-bold mr-1">Matériaux</dt>
                <dd className="inline">
                  {materiaux.map((materiau, index) => (<span key={index}>
                      {materiau}
                      {index < materiaux.length - 1 && ", "}
                    </span>))}
                </dd>
              </div>)}
          </dl>
        </div>
      </div>
      <ready_to_discuss_1.default />
    </base_layout_1.default>);
};
exports.default = ProjectPageTemplate;
exports.pageQuery = gatsby_1.graphql `
  query ProjectById($id: String!) {
    projet: googleProjetsSiteSheet(id: { eq: $id }) {
      id
      #idProjet
      typeDeProjet
      prestations
      departement
      titre
      titreDescriptif
      description
      #metaDescription
      artisans
      metiers
      materiaux
      architecte
      temoignage
      temoignageAuteur
      temoignageFonctionAuteur
      creditPhoto
      photo1Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo1Description
      photo2Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo2Description
      photo3Image {
        childImageSharp {
          gatsbyImageData(width: 536, height: 700, layout: FIXED)
        }
      }
      photo3Description
      photo4Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo4Description
      photo5Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo5Description
      photo6Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo6Description
      photo7Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo7Description
      photo8Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo8Description
      photo9Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo9Description
      photo10Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
      photo10Description
    }
  }
`;

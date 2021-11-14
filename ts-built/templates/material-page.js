"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const base_layout_1 = require("../components/layouts/base-layout");
const seo_1 = require("../components/seo/seo");
const ready_to_discuss_1 = require("../components/ready-to-discuss");
const MaterialPageTemplate = ({ data: { material }, }) => {
    const photo1Image = gatsby_plugin_image_1.getImage(material.photo1Image);
    return (<base_layout_1.default theme="brown">
      <seo_1.default title={material.nomMateriau} banner={gatsby_plugin_image_1.getSrc(material.photo1Image)}/>
      <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-9.5 lg:px-11.5 xl:px-4 2xl:px-18.5 pt-18">
        <h1 className="uppercase font-bold text-5.5xl sm:text-7xl lg:text-9.5xl border-b border-gris-800 py-8">
          {material.nomMateriau}
        </h1>
        <div className="uppercase text-sm my-5">
          <div>
            <span>Référence</span>{" "}
            <span className="font-bold">{material.reference}</span>
          </div>
          <div>
            <span>Classé dans</span>{" "}
            <span className="font-bold">{material.materiau}</span>
          </div>
        </div>

        {photo1Image && (<gatsby_plugin_image_1.GatsbyImage image={photo1Image} alt={material.photo1Description}/>)}

        <div className="grid lg:grid-cols-2">
          <dl className="text-xsm my-20 border-t border-gris-800">
            {material.domainesDapplication ? (<div className="grid grid-cols-2 gap-20 border-b border-gris-800 py-4">
                <dt className="uppercase">Domaine(s) d'application</dt>
                <dd className="uppercase font-bold text-right">
                  {material.domainesDapplication}
                </dd>
              </div>) : (<></>)}
            {material.finitions ? (<div className="grid grid-cols-2 gap-20 border-b border-gris-800 py-4">
                <dt className="uppercase">Finitions</dt>
                <dd className="uppercase font-bold text-right">
                  {material.finitions}
                </dd>
              </div>) : (<></>)}
          </dl>
        </div>
      </div>
      <ready_to_discuss_1.default />
    </base_layout_1.default>);
};
exports.default = MaterialPageTemplate;
exports.pageQuery = gatsby_1.graphql `
  query MaterialById($id: String!) {
    material: googleMateriauthequeSiteSheet(id: { eq: $id }) {
      id
      reference
      materiau
      nomMateriau
      domainesDapplication
      finitions
      photo1Image {
        childImageSharp {
          gatsbyImageData(width: 1388, height: 778, layout: CONSTRAINED)
        }
      }
    }
  }
`;

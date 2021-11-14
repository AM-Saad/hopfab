"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const string_1 = require("../../utilities/string");
const ProjectListItem = ({ projet, className }) => {
    var _a, _b, _c;
    const prestationsPrincipales = (_b = (_a = projet.prestationsPrincipales) === null || _a === void 0 ? void 0 : _a.split(",").filter(p => p && p.length > 0)) !== null && _b !== void 0 ? _b : [];
    const imagePrincipale = gatsby_plugin_image_1.getImage(projet.photo1Image);
    return (<article className={className}>
      <gatsby_1.Link to={`/realisations/${string_1.getUriFromFullPath(projet.fullPath, "realisations")}`} className="flex overflow-hidden">
        {imagePrincipale && (<gatsby_plugin_image_1.GatsbyImage image={imagePrincipale} alt={(_c = projet.photo1Description) !== null && _c !== void 0 ? _c : ""} className="transform duration-200 ease-in-out scale-100 hover:scale-110"/>)}
      </gatsby_1.Link>
      <div>
        <div className="text-lg xl:text-1xl mt-4">
          <span className="text-base xl:text-xl font-bold uppercase mr-1">
            {projet.client}
          </span>
          <h2 className="inline">{projet.titreDescriptif}</h2>
          {projet.architecte && (<span>
              <span className="mx-1">par</span>
              <span className="text-base xl:text-xl font-bold uppercase">
                {projet.architecte}
              </span>
            </span>)}
        </div>
        <ul className="flex flex-wrap mt-4">
          {prestationsPrincipales.map((prestationPrincipale, index) => (<li key={index} className="uppercase text-xs flex items-center justify-center border border-gray-500 rounded-full py-1 px-3 mr-2 mb-2">
              {prestationPrincipale}
            </li>))}
        </ul>
      </div>
    </article>);
};
exports.default = ProjectListItem;

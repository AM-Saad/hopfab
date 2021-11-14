"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const string_1 = require("../../utilities/string");
const MaterialListItem = ({ material, className }) => {
    var _a, _b, _c;
    const domainesDapplication = (_b = (_a = material.domainesDapplication) === null || _a === void 0 ? void 0 : _a.split(",").filter(p => p && p.length > 0)) !== null && _b !== void 0 ? _b : [];
    const imagePrincipale = gatsby_plugin_image_1.getImage(material.photo1Image);
    return (<article className={className}>
      <gatsby_1.Link to={`/materiautheque/${string_1.getUriFromFullPath(material.fullPath, "materiautheque")}`} className="flex overflow-hidden">
        {imagePrincipale && (<gatsby_plugin_image_1.GatsbyImage image={imagePrincipale} alt={(_c = material.photo1Description) !== null && _c !== void 0 ? _c : ""} className="transform duration-200 ease-in-out scale-100 hover:scale-110"/>)}
      </gatsby_1.Link>
      <div>
        <div className="flex flex-wrap text-base xl:text-xl mt-4">
          <h2 className="font-bold uppercase mr-1">{material.nomMateriau}</h2>
          <div>{material.reference}</div>
        </div>
        <ul className="flex flex-wrap mt-4">
          {domainesDapplication.map((domaineDapplication, index) => (<li key={index} className="uppercase text-xs flex items-center justify-center border border-gray-500 rounded-full py-1 px-3 mr-2 mb-2">
              {domaineDapplication}
            </li>))}
        </ul>
      </div>
    </article>);
};
exports.default = MaterialListItem;

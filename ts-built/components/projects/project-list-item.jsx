"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var string_1 = require("../../utilities/string");
var ProjectListItem = function (_a) {
    var _b, _c, _d;
    var projet = _a.projet, className = _a.className;
    var prestationsPrincipales = (_c = (_b = projet.prestationsPrincipales) === null || _b === void 0 ? void 0 : _b.split(",").filter(function (p) { return p && p.length > 0; })) !== null && _c !== void 0 ? _c : [];
    var imagePrincipale = gatsby_plugin_image_1.getImage(projet.photo1Image);
    return (<article className={className}>
      <gatsby_1.Link to={"/realisations/" + string_1.getUriFromFullPath(projet.fullPath, "realisations")} className="flex overflow-hidden">
        {imagePrincipale && (<gatsby_plugin_image_1.GatsbyImage image={imagePrincipale} alt={(_d = projet.photo1Description) !== null && _d !== void 0 ? _d : ""} className="transform duration-200 ease-in-out scale-100 hover:scale-110"/>)}
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
          {prestationsPrincipales.map(function (prestationPrincipale, index) { return (<li key={index} className="uppercase text-xs flex items-center justify-center border border-gray-500 rounded-full py-1 px-3 mr-2 mb-2">
              {prestationPrincipale}
            </li>); })}
        </ul>
      </div>
    </article>);
};
exports.default = ProjectListItem;
//# sourceMappingURL=project-list-item.jsx.map
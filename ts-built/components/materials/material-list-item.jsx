"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var string_1 = require("../../utilities/string");
var MaterialListItem = function (_a) {
    var _b, _c, _d;
    var material = _a.material, className = _a.className;
    var domainesDapplication = (_c = (_b = material.domainesDapplication) === null || _b === void 0 ? void 0 : _b.split(",").filter(function (p) { return p && p.length > 0; })) !== null && _c !== void 0 ? _c : [];
    var imagePrincipale = gatsby_plugin_image_1.getImage(material.photo1Image);
    return (<article className={className}>
      <gatsby_1.Link to={"/materiautheque/" + string_1.getUriFromFullPath(material.fullPath, "materiautheque")} className="flex overflow-hidden">
        {imagePrincipale && (<gatsby_plugin_image_1.GatsbyImage image={imagePrincipale} alt={(_d = material.photo1Description) !== null && _d !== void 0 ? _d : ""} className="transform duration-200 ease-in-out scale-100 hover:scale-110"/>)}
      </gatsby_1.Link>
      <div>
        <div className="flex flex-wrap text-base xl:text-xl mt-4">
          <h2 className="font-bold uppercase mr-1">{material.nomMateriau}</h2>
          <div>{material.reference}</div>
        </div>
        <ul className="flex flex-wrap mt-4">
          {domainesDapplication.map(function (domaineDapplication, index) { return (<li key={index} className="uppercase text-xs flex items-center justify-center border border-gray-500 rounded-full py-1 px-3 mr-2 mb-2">
              {domaineDapplication}
            </li>); })}
        </ul>
      </div>
    </article>);
};
exports.default = MaterialListItem;
//# sourceMappingURL=material-list-item.jsx.map
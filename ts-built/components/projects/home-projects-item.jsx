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
    return (<div className={className}>
        <div className="projects-section_item ">
            <gatsby_1.Link to={"/realisations/" + string_1.getUriFromFullPath(projet.fullPath, "realisations")} className="flex overflow-hidden">
                {imagePrincipale && (<gatsby_plugin_image_1.GatsbyImage image={imagePrincipale} alt={(_d = projet.photo1Description) !== null && _d !== void 0 ? _d : ""} className="transform duration-200 ease-in-out scale-100 hover:scale-110 w-full"/>)}
            </gatsby_1.Link>
            <p className="text-xsm py-5 uppercase">
                <b className="font-black"> {projet.client} </b>
                 {projet.titreDescriptif}<br />
                {projet.architecte && (<b>
                        <span className="mr-1">par</span>
                        <span className=" font-bold uppercase">
                            {projet.architecte}
                        </span>
                    </b>)}
            </p>
        </div>
        </div>);
};
exports.default = ProjectListItem;
//# sourceMappingURL=home-projects-item.jsx.map
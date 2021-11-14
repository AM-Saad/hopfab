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
    return (<div className={className}>
        <div className="projects-section_item ">
            <gatsby_1.Link to={`/realisations/${string_1.getUriFromFullPath(projet.fullPath, "realisations")}`} className="flex overflow-hidden">
                {imagePrincipale && (<gatsby_plugin_image_1.GatsbyImage image={imagePrincipale} alt={(_c = projet.photo1Description) !== null && _c !== void 0 ? _c : ""} className="transform duration-200 ease-in-out scale-100 hover:scale-110 w-full"/>)}
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

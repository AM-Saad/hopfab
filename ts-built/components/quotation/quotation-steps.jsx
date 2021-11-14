"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var lodash_1 = require("lodash");
var little_state_machine_1 = require("little-state-machine");
var http_1 = require("@hopfab/http");
var stateMachineActions_1 = require("./stateMachineActions");
var x_icon_1 = require("../icons/x-icon");
var quotation_step_project_know_how_1 = require("./quotation-step-project-know-how");
var quotation_step_materials_1 = require("./quotation-step-materials");
var quotation_step_project_typology_1 = require("./quotation-step-project-typology");
var quotation_step_service_type_1 = require("./quotation-step-service-type");
var quotation_step_service_1 = require("./quotation-step-service");
var quotation_step_badge_type_1 = require("./quotation-step-badge-type");
var quotation_step_spendinglimit_1 = require("./quotation-step-spendinglimit");
var quotation_step_shipping_date_1 = require("./quotation-step-shipping-date");
var quotation_step_shipping_location_1 = require("./quotation-step-shipping-location");
var quotation_step_attachment_1 = require("./quotation-step-attachment");
var quotation_step_description_1 = require("./quotation-step-description");
var quotation_step_contact_1 = require("./quotation-step-contact");
var quotation_step_final_1 = require("./quotation-step-final");
var QuotationSteps = function (_a) {
    var _b = little_state_machine_1.useStateMachine({ updateData: stateMachineActions_1.updateData }), actions = _b.actions, state = _b.state;
    react_1.useEffect(function () {
        // Référentiel dynamique : on le fait ici parce qu'on est coté client et on a accès aux actions du state machine
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var referentiels, serviceTypesData_1, error_1;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
            return __generator(this, function (_x) {
                switch (_x.label) {
                    case 0:
                        _x.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, http_1.get("/referentiels.json")];
                    case 1:
                        referentiels = _x.sent();
                        serviceTypesData_1 = [
                            {
                                name: "estimatif-de-chiffrage",
                                description: "Je finalise la conception de mon projet, je souhaite obtenir une fourchette de prix",
                            },
                            {
                                name: "chiffrage-standard",
                                description: "Mon cahier des charges est complet, je souhaite obtenir des devis comparatifs",
                            },
                            {
                                name: "mise-en-relation",
                                description: "Mon projet est en cours de réflexion, je souhaite échanger avec un atelier",
                            },
                        ];
                        actions.updateData({
                            projectTypologies: (_c = (_b = (_a = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allTypologies) === null || _a === void 0 ? void 0 : _a.nodes) === null || _b === void 0 ? void 0 : _b.map(function (t) { return ({
                                code: t.id__normalized,
                                label: t.humanName,
                            }); })) !== null && _c !== void 0 ? _c : [],
                            services: (_f = (_e = (_d = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allServices) === null || _d === void 0 ? void 0 : _d.nodes) === null || _e === void 0 ? void 0 : _e.map(function (s) { return ({
                                code: s.id__normalized,
                                label: s.humanName,
                            }); })) !== null && _f !== void 0 ? _f : [],
                            badges: (_j = (_h = (_g = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allBadges) === null || _g === void 0 ? void 0 : _g.nodes) === null || _h === void 0 ? void 0 : _h.map(function (s) { return ({
                                code: s.id__normalized,
                                label: s.humanName,
                            }); })) !== null && _j !== void 0 ? _j : [],
                            materials: (_m = (_l = (_k = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allMaterials) === null || _k === void 0 ? void 0 : _k.nodes) === null || _l === void 0 ? void 0 : _l.map(function (s) { return ({
                                code: s.id__normalized,
                                label: s.humanName,
                            }); })) !== null && _m !== void 0 ? _m : [],
                            serviceTypes: (_q = (_p = (_o = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allServiceTypes) === null || _o === void 0 ? void 0 : _o.nodes) === null || _p === void 0 ? void 0 : _p.map(function (st) {
                                var _a;
                                return ({
                                    code: st.id__normalized,
                                    description: (_a = serviceTypesData_1 === null || serviceTypesData_1 === void 0 ? void 0 : serviceTypesData_1.find(function (std) { return std.name === st.name; })) === null || _a === void 0 ? void 0 : _a.description,
                                });
                            })) !== null && _q !== void 0 ? _q : [],
                            priceRanges: (_t = (_s = (_r = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allPriceRanges) === null || _r === void 0 ? void 0 : _r.nodes) === null || _s === void 0 ? void 0 : _s.map(function (pr) { return ({
                                code: pr.id__normalized,
                                label: pr.humanName,
                            }); })) !== null && _t !== void 0 ? _t : [],
                            professions: (_w = (_v = (_u = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allProfessions) === null || _u === void 0 ? void 0 : _u.nodes) === null || _v === void 0 ? void 0 : _v.map(function (pr) { return ({
                                code: pr.id__normalized,
                                label: pr.humanName,
                            }); })) !== null && _w !== void 0 ? _w : [],
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _x.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, []);
    var progress = react_1.useMemo(function () {
        var progress = (state.meta.currentStep / state.meta.totalSteps) * 100;
        if (progress > 100)
            return 100;
        else
            return progress;
    }, [state.meta.currentStep, state.meta.totalSteps]);
    return (<>
      <div className="flex items-center justify-between">
        <div className={"font-bold text-xsm text-brown-50 " + (state.meta.currentStep <= state.meta.totalSteps ? "" : "invisible")}>
          <div className="uppercase">Lancer votre projet</div>
          <div className="uppercase">
            Étape {lodash_1.padStart(state.meta.currentStep.toString(), 2, "0")}/
            {lodash_1.padStart(state.meta.totalSteps.toString(), 2, "0")}
          </div>
        </div>
        <a href="#" onClick={function () { return gatsby_1.navigate(-1); }} className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50">
          <x_icon_1.default className="w-6 h-6 text-brown-50"/>
        </a>
      </div>
          <main className="flex-auto h-full flex flex-col">
           {state.meta.currentStep === 1 && <quotation_step_project_know_how_1.default />}
           {state.meta.currentStep === 2 && <quotation_step_shipping_location_1.default />}
            {state.meta.currentStep === 3 && <quotation_step_shipping_date_1.default />}
            {state.meta.currentStep === 4 && <quotation_step_project_typology_1.default />}
            {state.meta.currentStep === 5 && <quotation_step_spendinglimit_1.default />}
            {state.meta.currentStep === 6 && <quotation_step_badge_type_1.default />}
        {state.meta.currentStep === 7 && <quotation_step_service_type_1.default />}
         {state.meta.currentStep === 8 && <quotation_step_service_1.default />}
         {/*to add new step 9*/}
        {state.meta.currentStep === 9 && <quotation_step_materials_1.default />}
        {state.meta.currentStep === 10 && <quotation_step_description_1.default />}
        {state.meta.currentStep === 11 && <quotation_step_attachment_1.default />}
        {state.meta.currentStep === 12 && <quotation_step_contact_1.default />}
        {state.meta.currentStep === 13 && <quotation_step_final_1.default />}
      </main>
      <div className="h-px w-full bg-gris-700 mt-3">
        <div style={{ width: progress + "%" }} className="h-px bg-brown-50"></div>
      </div>
    </>);
};
exports.default = QuotationSteps;
//# sourceMappingURL=quotation-steps.jsx.map
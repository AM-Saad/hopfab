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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_1 = require("gatsby");
const lodash_1 = require("lodash");
const little_state_machine_1 = require("little-state-machine");
const http_1 = require("@hopfab/http");
const stateMachineActions_1 = require("./stateMachineActions");
const x_icon_1 = require("../icons/x-icon");
const quotation_step_project_know_how_1 = require("./quotation-step-project-know-how");
const quotation_step_materials_1 = require("./quotation-step-materials");
const quotation_step_project_typology_1 = require("./quotation-step-project-typology");
const quotation_step_service_type_1 = require("./quotation-step-service-type");
const quotation_step_service_1 = require("./quotation-step-service");
const quotation_step_badge_type_1 = require("./quotation-step-badge-type");
const quotation_step_spendinglimit_1 = require("./quotation-step-spendinglimit");
const quotation_step_shipping_date_1 = require("./quotation-step-shipping-date");
const quotation_step_shipping_location_1 = require("./quotation-step-shipping-location");
const quotation_step_attachment_1 = require("./quotation-step-attachment");
const quotation_step_description_1 = require("./quotation-step-description");
const quotation_step_contact_1 = require("./quotation-step-contact");
const quotation_step_final_1 = require("./quotation-step-final");
const QuotationSteps = ({}) => {
    const { actions, state } = little_state_machine_1.useStateMachine({ updateData: stateMachineActions_1.updateData });
    react_1.useEffect(() => {
        // Référentiel dynamique : on le fait ici parce qu'on est coté client et on a accès aux actions du state machine
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
            try {
                const referentiels = yield http_1.get(`/referentiels.json`);
                const serviceTypesData = [
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
                    projectTypologies: (_c = (_b = (_a = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allTypologies) === null || _a === void 0 ? void 0 : _a.nodes) === null || _b === void 0 ? void 0 : _b.map(t => ({
                        code: t.id__normalized,
                        label: t.humanName,
                    }))) !== null && _c !== void 0 ? _c : [],
                    services: (_f = (_e = (_d = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allServices) === null || _d === void 0 ? void 0 : _d.nodes) === null || _e === void 0 ? void 0 : _e.map(s => ({
                        code: s.id__normalized,
                        label: s.humanName,
                    }))) !== null && _f !== void 0 ? _f : [],
                    badges: (_j = (_h = (_g = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allBadges) === null || _g === void 0 ? void 0 : _g.nodes) === null || _h === void 0 ? void 0 : _h.map(s => ({
                        code: s.id__normalized,
                        label: s.humanName,
                    }))) !== null && _j !== void 0 ? _j : [],
                    materials: (_m = (_l = (_k = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allMaterials) === null || _k === void 0 ? void 0 : _k.nodes) === null || _l === void 0 ? void 0 : _l.map(s => ({
                        code: s.id__normalized,
                        label: s.humanName,
                    }))) !== null && _m !== void 0 ? _m : [],
                    serviceTypes: (_q = (_p = (_o = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allServiceTypes) === null || _o === void 0 ? void 0 : _o.nodes) === null || _p === void 0 ? void 0 : _p.map(st => {
                        var _a;
                        return ({
                            code: st.id__normalized,
                            description: (_a = serviceTypesData === null || serviceTypesData === void 0 ? void 0 : serviceTypesData.find(std => std.name === st.name)) === null || _a === void 0 ? void 0 : _a.description,
                        });
                    })) !== null && _q !== void 0 ? _q : [],
                    priceRanges: (_t = (_s = (_r = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allPriceRanges) === null || _r === void 0 ? void 0 : _r.nodes) === null || _s === void 0 ? void 0 : _s.map(pr => ({
                        code: pr.id__normalized,
                        label: pr.humanName,
                    }))) !== null && _t !== void 0 ? _t : [],
                    professions: (_w = (_v = (_u = referentiels === null || referentiels === void 0 ? void 0 : referentiels.allProfessions) === null || _u === void 0 ? void 0 : _u.nodes) === null || _v === void 0 ? void 0 : _v.map(pr => ({
                        code: pr.id__normalized,
                        label: pr.humanName,
                    }))) !== null && _w !== void 0 ? _w : [],
                });
            }
            catch (error) {
                // TODO: handle error
            }
        });
        fetchData();
    }, []);
    const progress = react_1.useMemo(() => {
        const progress = (state.meta.currentStep / state.meta.totalSteps) * 100;
        if (progress > 100)
            return 100;
        else
            return progress;
    }, [state.meta.currentStep, state.meta.totalSteps]);
    return (<>
      <div className="flex items-center justify-between">
        <div className={`font-bold text-xsm text-brown-50 ${state.meta.currentStep <= state.meta.totalSteps ? "" : "invisible"}`}>
          <div className="uppercase">Lancer votre projet</div>
          <div className="uppercase">
            Étape {lodash_1.padStart(state.meta.currentStep.toString(), 2, "0")}/
            {lodash_1.padStart(state.meta.totalSteps.toString(), 2, "0")}
          </div>
        </div>
        <a href="#" onClick={() => gatsby_1.navigate(-1)} className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50">
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
        <div style={{ width: `${progress}%` }} className="h-px bg-brown-50"></div>
      </div>
    </>);
};
exports.default = QuotationSteps;

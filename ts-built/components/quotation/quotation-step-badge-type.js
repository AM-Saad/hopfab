"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const little_state_machine_1 = require("little-state-machine");
const react_hook_form_1 = require("react-hook-form");
const stateMachineActions_1 = require("./stateMachineActions");
const right_arrow_icon_1 = require("../icons/right-arrow-icon");
const down_left_arrow_icon_1 = require("../icons/down-left-arrow-icon");
const exclamation_circle_icon_1 = require("../icons/exclamation-circle-icon");
const g_tag_1 = require("../../utilities/g-tag");
const QuotationStepService = () => {
    var _a;
    const { register, handleSubmit, formState: { errors }, } = react_hook_form_1.useForm();
    const { actions, state } = little_state_machine_1.useStateMachine({ updateForm: stateMachineActions_1.updateForm, updateMeta: stateMachineActions_1.updateMeta });
    const onSubmit = data => {
        g_tag_1.analytics("event", "depot_step", {
            event_category: "engagement",
            event_label: `Dépôt de projet - Étape badges`,
        });
        actions.updateMeta({ currentStep: state.meta.currentStep + 1 });
    };
    const checkErrors = (e) => {
        if (state.form.badgesIds.length < 2) {
            e.preventDefault();
            let wrapper = document.getElementById("error-wrapper");
            wrapper.innerHTML = '';
            const pElement = document.createElement("p");
            pElement.classList.add("flex", "mt-4", "text-sm,", "text-red-600", "service-error");
            pElement.innerText = "Vous devez sélectionner deux options";
            wrapper.appendChild(pElement);
        }
        else {
            handleSubmit(onSubmit(e));
        }
    };
    const chooseBadges = (e) => {
        if (state.form.badgesIds.length === 2) {
            if (state.form.badgesIds.includes(e.target.value)) {
                return actions.updateForm({
                    badgesIds: e.target.checked
                        ? [...state.form.badgesIds, e.target.value]
                        : [
                            ...state.form.badgesIds.filter(s => s !== e.target.value),
                        ],
                });
            }
            else {
                e.target.checked = false;
            }
        }
        else {
            return actions.updateForm({
                badgesIds: e.target.checked
                    ? [...state.form.badgesIds, e.target.value]
                    : [
                        ...state.form.badgesIds.filter(s => s !== e.target.value),
                    ],
            });
        }
    };
    return (<form onSubmit={checkErrors} className="flex-auto h-full flex flex-col">
      <div className="flex-auto pt-16">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => actions.updateMeta({ currentStep: state.meta.currentStep - 1 })} type="button" className="flex items-center font-black text-xsm text-brown-50 uppercase mb-4 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50">
            <down_left_arrow_icon_1.default className="mr-2"/>
            <span className="mt-0.5 border-b-2 border-brown-50">Retour</span>
          </button>
          <fieldset>
            <legend className="font-bold text-5xl sm:text-7.5xl text-brown-50 mb-8">
              Sélectionnez 2 critères importants dans le choix de votre atelier
            </legend>
            <div className="grid sm:grid-cols-3 gap-x-18 mx-auto">
              {state.data.badges.map((service, index) => (<div key={service.code} className="rounded-md -space-y-px">
                  <div className="relative py-4 flex">
                    <div className="flex items-center h-5">
                      <input id={`service-option-${index}`} {...register("badgesIds", {
            required: "Vous devez sélectionner deux options",
        })} type="checkbox" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value={service.code} defaultChecked={state.form.badgesIds.includes(service.code)} onChange={e => chooseBadges(e)}/>
                    </div>
                    <label htmlFor={`service-option-${index}`} className="ml-8 flex flex-col cursor-pointer">
                      <span className="block text-xsm text-brown-50 font-bold uppercase">
                        {service.label}
                      </span>
                    </label>
                  </div>
                </div>))}
            </div>
            <div id="error-wrapper">
              {errors.badgesIds && (<p className="flex mt-4 text-sm text-red-600 service-error" id="">
                  <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500 mr-2"/>{" "}
                  {(_a = errors.badgesIds) === null || _a === void 0 ? void 0 : _a.message}
                </p>)}
            </div>
          </fieldset>
        </div>
      </div>
      <div className="mt-16">
        <button type="submit" className="ml-auto flex items-center font-bold text-5xl sm:text-6xl text-brown-50 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50">
          Valider <right_arrow_icon_1.default className="ml-8 w-10 sm:w-12 h-10 sm:h-12"/>
        </button>
      </div>
    </form>);
};
exports.default = QuotationStepService;

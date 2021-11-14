"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var little_state_machine_1 = require("little-state-machine");
var react_hook_form_1 = require("react-hook-form");
var stateMachineActions_1 = require("./stateMachineActions");
var right_arrow_icon_1 = require("../icons/right-arrow-icon");
var down_left_arrow_icon_1 = require("../icons/down-left-arrow-icon");
var exclamation_circle_icon_1 = require("../icons/exclamation-circle-icon");
var g_tag_1 = require("../../utilities/g-tag");
var QuotationStepServiceType = function () {
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit, errors = _a.formState.errors;
    var _b = little_state_machine_1.useStateMachine({ updateForm: stateMachineActions_1.updateForm, updateMeta: stateMachineActions_1.updateMeta }), actions = _b.actions, state = _b.state;
    var onSubmit = function (data) {
        g_tag_1.analytics("event", "depot_step", {
            event_category: "engagement",
            event_label: "D\u00E9p\u00F4t de projet - \u00C9tape type de service",
        });
        actions.updateMeta({ currentStep: state.meta.currentStep + 1 });
    };
    return (<form onSubmit={handleSubmit(onSubmit)} className="flex-auto h-full flex flex-col">
      <div className="flex-auto pt-16">
        <div className="max-w-4xl mx-auto">
          <button onClick={function () {
            return actions.updateMeta({ currentStep: state.meta.currentStep - 1 });
        }} type="button" className="flex items-center font-black text-xsm text-brown-50 uppercase mb-4 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50">
            <down_left_arrow_icon_1.default className="mr-2"/>
            <span className="mt-0.5 border-b-2 border-brown-50">Retour</span>
          </button>
          <fieldset>
            <legend className="font-bold text-5xl sm:text-7.5xl text-brown-50 mb-8">
              Où en êtes-vous dans votre projet ?
            </legend>
            <div className="grid sm:grid-cols-3 gap-x-18 mx-auto">
              {state.data.serviceTypes.map(function (serviceType, index) { return (<div key={serviceType.code} className="rounded-md -space-y-px">
                  <div className="relative py-4 flex">
                    <div className="flex items-center h-5">
                      <input id={"serviceType-option-" + index} {...register("serviceTypeId", {
            required: "Vous devez sélectionner une option",
        })} type="radio" className="bg-gris-800 mt-2  h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value={serviceType.code} defaultChecked={state.form.serviceTypeId === serviceType.code} onChange={function (e) {
                return actions.updateForm({ serviceTypeId: e.target.value });
            }}/>
                    </div>
                    <label htmlFor={"serviceType-option-" + index} className="ml-8 flex flex-col text-brown-50 cursor-pointer">

                      <span className="text-sm">
                        {serviceType.description}
                      </span>
                    </label>
                  </div>
                </div>); })}
            </div>

        {state.form.serviceTypeId === '1073320e-b576-445a-b9cb-a9a84d484aa0' && <div className="mt-8">
            <div className="text-brown-50 mb-4">Nombre de devis souhaité(s)</div>

              <div className="grid sm:grid-cols-3 gap-x-18 mx-auto">
                <div className="relative py-4 flex">
                  <div className="flex items-center h-5">
                    <input id={"creatorConsultationLimit-option-0"} {...register("creatorConsultationLimitId", {
            required: "Vous devez sélectionner une option",
        })} type="radio" className="bg-gris-800 mt-2  h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value="1" defaultChecked={state.form.creatorConsultationLimitId === "1"} onChange={function (e) {
                return actions.updateForm({ creatorConsultationLimitId: e.target.value });
            }}/>
                  </div>
                  <label htmlFor={"creatorConsultationLimit-option-0"} className="ml-8 flex flex-col text-brown-50 cursor-pointer">
                    1
                    </label>
                </div>
                <div className="relative py-4 flex">
                  <div className="flex items-center h-5">
                    <input id={"creatorConsultationLimit-option-1"} {...register("creatorConsultationLimitId", {
            required: "Vous devez sélectionner une option",
        })} type="radio" className="bg-gris-800 mt-2  h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value="2" defaultChecked={state.form.creatorConsultationLimitId === "2"} onChange={function (e) {
                return actions.updateForm({ creatorConsultationLimitId: e.target.value });
            }}/>
                  </div>
                  <label htmlFor={"creatorConsultationLimit-option-1"} className="ml-8 flex flex-col text-brown-50 cursor-pointer">
                   2
                    </label>
                </div>

   <div className="relative py-4 flex">
                  <div className="flex items-center h-5">
                    <input id={"creatorConsultationLimit-option-2"} {...register("creatorConsultationLimitId", {
            required: "Vous devez sélectionner une option",
        })} type="radio" className="bg-gris-800 mt-2  h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value="3" defaultChecked={state.form.creatorConsultationLimitId === "3"} onChange={function (e) {
                return actions.updateForm({ creatorConsultationLimitId: e.target.value });
            }}/>
                  </div>
                  <label htmlFor={"creatorConsultationLimit-option-2"} className="ml-8 flex flex-col text-brown-50 cursor-pointer">
                   3
                    </label>
                </div>

              </div>
            </div>}
            {errors.serviceTypeId && (<p className="flex mt-4 text-sm text-red-600" id="serviceType-error">
                <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500 mr-2"/>{" "}
                {errors.serviceTypeId.message}
              </p>)}
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
exports.default = QuotationStepServiceType;
//# sourceMappingURL=quotation-step-service-type.jsx.map
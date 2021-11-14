"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var little_state_machine_1 = require("little-state-machine");
var react_hook_form_1 = require("react-hook-form");
var stateMachineActions_1 = require("./stateMachineActions");
var right_arrow_icon_1 = require("../icons/right-arrow-icon");
var down_left_arrow_icon_1 = require("../icons/down-left-arrow-icon");
var exclamation_circle_icon_1 = require("../icons/exclamation-circle-icon");
var g_tag_1 = require("../../utilities/g-tag");
var QuotationStepService = function () {
    var _a;
    var _b = react_hook_form_1.useForm(), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.formState.errors;
    var _c = little_state_machine_1.useStateMachine({ updateForm: stateMachineActions_1.updateForm, updateMeta: stateMachineActions_1.updateMeta }), actions = _c.actions, state = _c.state;
    var onSubmit = function (data) {
        g_tag_1.analytics("event", "depot_step", {
            event_category: "engagement",
            event_label: "D\u00E9p\u00F4t de projet - \u00C9tape prestations",
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
              Les types de prestations concernés
            </legend>
            <div className="grid sm:grid-cols-3 gap-x-18 mx-auto">
              {state.data.services.map(function (service, index) { return (<div key={service.code} className="rounded-md -space-y-px">
                  <div className="relative py-4 flex">
                    <div className="flex items-center h-5">
                      <input id={"service-option-" + index} {...register("servicesIds", {
            required: "Vous devez sélectionner une option",
        })} type="checkbox" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value={service.code} defaultChecked={state.form.servicesIds.includes(service.code)} onChange={function (e) {
                return actions.updateForm({
                    servicesIds: e.target.checked
                        ? __spreadArray(__spreadArray([], state.form.servicesIds), [e.target.value]) : __spreadArray([], state.form.servicesIds.filter(function (s) { return s !== e.target.value; })),
                });
            }}/>
                    </div>
                    <label htmlFor={"service-option-" + index} className="ml-8 flex flex-col cursor-pointer">
                      <span className="block text-xsm text-brown-50 font-bold uppercase">
                        {service.label}
                      </span>
                    </label>
                  </div>
                </div>); })}
            </div>
            {errors.servicesIds && (<p className="flex mt-4 text-sm text-red-600" id="service-error">
                <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500 mr-2"/>{" "}
                {(_a = errors.servicesIds) === null || _a === void 0 ? void 0 : _a.message}
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
exports.default = QuotationStepService;
//# sourceMappingURL=quotation-step-service.jsx.map
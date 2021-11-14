"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var little_state_machine_1 = require("little-state-machine");
var react_hook_form_1 = require("react-hook-form");
var stateMachineActions_1 = require("./stateMachineActions");
var right_arrow_icon_1 = require("../icons/right-arrow-icon");
var down_left_arrow_icon_1 = require("../icons/down-left-arrow-icon");
var exclamation_circle_icon_1 = require("../icons/exclamation-circle-icon");
var date_picker_1 = require("../date-picker/date-picker");
var g_tag_1 = require("../../utilities/g-tag");
var QuotationStepQuotationDeadline = function () {
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit, control = _a.control, errors = _a.formState.errors;
    var _b = little_state_machine_1.useStateMachine({ updateForm: stateMachineActions_1.updateForm, updateMeta: stateMachineActions_1.updateMeta }), actions = _b.actions, state = _b.state;
    var onSubmit = function (data) {
        g_tag_1.analytics("event", "depot_step", {
            event_category: "engagement",
            event_label: "D\u00E9p\u00F4t de projet - \u00C9tape date de r\u00E9ception des devis",
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
            <legend className="font-bold text-5xl sm:text-7.5xl text-brown-50 mb-2">
              Date de réception des devis
            </legend>
            <p className="mb-6 text-xl text-brown-50">
              Le délai de réponse aura un impact sur le nombre d’ateliers qui se
              positionneront sur votre projet.
            </p>
            <div className="grid sm:grid-cols-3 gap-x-18 mx-auto">
              <div className="rounded-md -space-y-px">
                <div className="relative py-4 flex">
                  <div className="flex items-center h-5">
                    <input id={"quotationDeadlineUrgent-option-0"} {...register("quotationDeadlineUrgent", {
        required: "Vous devez sélectionner une option",
    })} type="radio" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value="false" defaultChecked={state.form.quotationDeadlineUrgent === false} onChange={function (e) {
            return actions.updateForm({ quotationDeadlineUrgent: false });
        }}/>
                  </div>
                  <label htmlFor={"quotationDeadlineUrgent-option-0"} className="ml-8 flex flex-col cursor-pointer">
                    <span className="block text-xsm text-brown-50 font-bold uppercase">
                      Standard
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <div className="rounded-md -space-y-px">
                  <div className="relative py-4 flex">
                    <div className="flex items-center h-5">
                      <input id={"quotationDeadlineUrgent-option-1"} {...register("quotationDeadlineUrgent", {
        required: "Vous devez sélectionner une option",
    })} type="radio" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value="true" defaultChecked={state.form.quotationDeadlineUrgent === true} onChange={function (e) {
            return actions.updateForm({ quotationDeadlineUrgent: true });
        }}/>
                    </div>
                    <label htmlFor={"quotationDeadlineUrgent-option-1"} className="ml-8 flex flex-col cursor-pointer">
                      <span className="block text-xsm text-brown-50 font-bold uppercase">
                        Urgent
                      </span>
                    </label>
                  </div>
                </div>
                {state.form.quotationDeadlineUrgent && (<div className="mt-4 sm:mb-28">
                    <react_hook_form_1.Controller control={control} name="quotationDeadlineDate" rules={{
                required: "Vous devez sélectionner une date",
            }} defaultValue={state.form.quotationDeadlineDate} render={function (_a) {
                var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
                return (<date_picker_1.default name="quotationDeadlineDate" onChange={function (e) {
                        onChange(e.target.value);
                        actions.updateForm({
                            quotationDeadlineDate: e.target.value,
                        });
                    }} onBlur={onBlur} value={value}/>);
            }} shouldUnregister={true} class="mt-4 mb-12"/>
                    {errors.quotationDeadlineDate && (<p className="flex mt-4 text-sm text-red-600" id="quotationDeadlineDate-error">
                        <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500 mr-2"/>{" "}
                        {errors.quotationDeadlineDate.message}
                      </p>)}
                  </div>)}
              </div>
            </div>
            {errors.quotationDeadlineUrgent && (<p className="flex mt-4 text-sm text-red-600" id="quotationDeadlineUrgent-error">
                <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500 mr-2"/>{" "}
                {errors.quotationDeadlineUrgent.message}
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
exports.default = QuotationStepQuotationDeadline;
//# sourceMappingURL=quotation-step-quotation-deadline.jsx.map
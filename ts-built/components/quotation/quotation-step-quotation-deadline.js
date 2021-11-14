"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const little_state_machine_1 = require("little-state-machine");
const react_hook_form_1 = require("react-hook-form");
const stateMachineActions_1 = require("./stateMachineActions");
const right_arrow_icon_1 = require("../icons/right-arrow-icon");
const down_left_arrow_icon_1 = require("../icons/down-left-arrow-icon");
const exclamation_circle_icon_1 = require("../icons/exclamation-circle-icon");
const date_picker_1 = require("../date-picker/date-picker");
const g_tag_1 = require("../../utilities/g-tag");
const QuotationStepQuotationDeadline = () => {
    const { register, handleSubmit, control, formState: { errors }, } = react_hook_form_1.useForm();
    const { actions, state } = little_state_machine_1.useStateMachine({ updateForm: stateMachineActions_1.updateForm, updateMeta: stateMachineActions_1.updateMeta });
    const onSubmit = data => {
        g_tag_1.analytics("event", "depot_step", {
            event_category: "engagement",
            event_label: `Dépôt de projet - Étape date de réception des devis`,
        });
        actions.updateMeta({ currentStep: state.meta.currentStep + 1 });
    };
    return (<form onSubmit={handleSubmit(onSubmit)} className="flex-auto h-full flex flex-col">
      <div className="flex-auto pt-16">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => actions.updateMeta({ currentStep: state.meta.currentStep - 1 })} type="button" className="flex items-center font-black text-xsm text-brown-50 uppercase mb-4 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50">
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
                    <input id={`quotationDeadlineUrgent-option-0`} {...register("quotationDeadlineUrgent", {
        required: "Vous devez sélectionner une option",
    })} type="radio" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value="false" defaultChecked={state.form.quotationDeadlineUrgent === false} onChange={e => actions.updateForm({ quotationDeadlineUrgent: false })}/>
                  </div>
                  <label htmlFor={`quotationDeadlineUrgent-option-0`} className="ml-8 flex flex-col cursor-pointer">
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
                      <input id={`quotationDeadlineUrgent-option-1`} {...register("quotationDeadlineUrgent", {
        required: "Vous devez sélectionner une option",
    })} type="radio" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value="true" defaultChecked={state.form.quotationDeadlineUrgent === true} onChange={e => actions.updateForm({ quotationDeadlineUrgent: true })}/>
                    </div>
                    <label htmlFor={`quotationDeadlineUrgent-option-1`} className="ml-8 flex flex-col cursor-pointer">
                      <span className="block text-xsm text-brown-50 font-bold uppercase">
                        Urgent
                      </span>
                    </label>
                  </div>
                </div>
                {state.form.quotationDeadlineUrgent && (<div className="mt-4 sm:mb-28">
                    <react_hook_form_1.Controller control={control} name="quotationDeadlineDate" rules={{
                required: "Vous devez sélectionner une date",
            }} defaultValue={state.form.quotationDeadlineDate} render={({ field: { onChange, onBlur, value } }) => (<date_picker_1.default name="quotationDeadlineDate" onChange={e => {
                    onChange(e.target.value);
                    actions.updateForm({
                        quotationDeadlineDate: e.target.value,
                    });
                }} onBlur={onBlur} value={value}/>)} shouldUnregister={true} class="mt-4 mb-12"/>
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

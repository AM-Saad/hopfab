"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const little_state_machine_1 = require("little-state-machine");
const react_hook_form_1 = require("react-hook-form");
const stateMachineActions_1 = require("./stateMachineActions");
const right_arrow_icon_1 = require("../icons/right-arrow-icon");
const down_left_arrow_icon_1 = require("../icons/down-left-arrow-icon");
const react_textarea_autosize_1 = require("react-textarea-autosize");
const exclamation_circle_icon_1 = require("../icons/exclamation-circle-icon");
const g_tag_1 = require("../../utilities/g-tag");
const QuotationStepDescription = () => {
    const { register, handleSubmit, formState: { errors }, } = react_hook_form_1.useForm();
    const { actions, state } = little_state_machine_1.useStateMachine({ updateForm: stateMachineActions_1.updateForm, updateMeta: stateMachineActions_1.updateMeta });
    const onSubmit = data => {
        g_tag_1.analytics("event", "depot_step", {
            event_category: "engagement",
            event_label: `Dépôt de projet - Étape description`,
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
            <legend className="font-bold text-5xl sm:text-7.5xl text-brown-50 mb-8">
              Particularités de votre projet
            </legend>
            <div className="grid gap-y-6 mx-auto">
              <div>
                <label htmlFor="projectName" className="block text-sm font-bold text-brown-50 uppercase">
                  Nom du projet{" "}
                  <span className="lowercase font-medium">(optionnel)</span>
                </label>
                <div className="mt-1 relative">
                  <input type="text" id="projectName" {...register("projectName", {
        maxLength: {
            value: 50,
            message: "Le nom du projet ne doit pas comporter plus de 50 caractères",
        },
    })} defaultValue={state.form.projectName} className={`bg-transparent text-brown-50 block w-full pr-10 ${!errors.projectName
            ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"} disabled:opacity-50`} placeholder="" aria-invalid={!!errors.projectName} aria-describedby="projectName-error" onChange={e => {
            actions.updateForm({
                projectName: e.target.value,
            });
        }}/>
                  {errors.projectName && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500"/>
                    </div>)}
                </div>
                {errors.projectName && (<p className="mt-4 text-sm text-red-600" id="projectName-error">
                    {errors.projectName.message}
                  </p>)}
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-bold text-brown-50 uppercase">
                  Des précisions à apporter pour permettre aux artisans de vous répondre précisemment
                </label>
                <div className="mt-1">
                  <react_textarea_autosize_1.default {...register("description", {
        required: "La description est requise",
        maxLength: {
            value: 5000,
            message: "Votre description ne doit pas comporter plus de 5000 caractères",
        },
    })} id="description" defaultValue={state.form.description} minRows={5} maxRows={15} className={`bg-transparent text-brown-50 block w-full ${!errors.description
            ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"} disabled:opacity-50`} placeholder="Matériaux, dimensions, particularités, etc." aria-invalid={!!errors.description} aria-describedby="description-error" onChange={e => {
            actions.updateForm({
                description: e.target.value,
            });
        }}/>
                </div>
                {errors.description && (<p className="flex mt-2 text-sm text-red-600" id="description-error">
                    <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500 mr-2"/>{" "}
                    {errors.description.message}
                  </p>)}
              </div>
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
exports.default = QuotationStepDescription;

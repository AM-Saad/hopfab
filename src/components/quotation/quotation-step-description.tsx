import React from "react";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";

import { updateForm, updateMeta } from "./stateMachineActions";
import RightArrowIcon from "../icons/right-arrow-icon";
import DownLeftArrowIcon from "../icons/down-left-arrow-icon";
import { QuotationForm } from "../../models/quotationform";
import TextareaAutosize from "react-textarea-autosize";
import ExclamationCircleIcon from "../icons/exclamation-circle-icon";
import { analytics } from "../../utilities/g-tag";

type DataProps = {};

const QuotationStepDescription: React.FC<DataProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuotationForm>();
  const { actions, state } = useStateMachine({ updateForm, updateMeta });

  const onSubmit = data => {
    analytics("event", "depot_step", {
      event_category: "engagement",
      event_label: `Dépôt de projet - Étape description`,
    });
    actions.updateMeta({ currentStep: state.meta.currentStep + 1 });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-auto h-full flex flex-col"
    >
      <div className="flex-auto pt-16">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() =>
              actions.updateMeta({ currentStep: state.meta.currentStep - 1 })
            }
            type="button"
            className="flex items-center font-black text-xsm text-brown-50 uppercase mb-4 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
          >
            <DownLeftArrowIcon className="mr-2" />
            <span className="mt-0.5 border-b-2 border-brown-50">Retour</span>
          </button>
          <fieldset>
            <legend className="font-bold text-5xl sm:text-7.5xl text-brown-50 mb-8">
              Particularités de votre projet
            </legend>
            <div className="grid gap-y-6 mx-auto">
              <div>
                <label
                  htmlFor="projectName"
                  className="block text-sm font-bold text-brown-50 uppercase"
                >
                  Nom du projet{" "}
                  <span className="lowercase font-medium">(optionnel)</span>
                </label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    id="projectName"
                    {...register("projectName", {
                      maxLength: {
                        value: 50,
                        message:
                          "Le nom du projet ne doit pas comporter plus de 50 caractères",
                      },
                    })}
                    defaultValue={state.form.projectName}
                    className={`bg-transparent text-brown-50 block w-full pr-10 ${
                      !errors.projectName
                        ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
                        : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    } disabled:opacity-50`}
                    placeholder=""
                    aria-invalid={!!errors.projectName}
                    aria-describedby="projectName-error"
                    onChange={e => {
                      actions.updateForm({
                        projectName: e.target.value,
                      });
                    }}
                  />
                  {errors.projectName && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.projectName && (
                  <p
                    className="mt-4 text-sm text-red-600"
                    id="projectName-error"
                  >
                    {errors.projectName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-bold text-brown-50 uppercase"
                >
                  Des précisions à apporter pour permettre aux artisans de vous répondre précisemment
                </label>
                <div className="mt-1">
                  <TextareaAutosize
                    {...register("description", {
                      required: "La description est requise",
                      maxLength: {
                        value: 5000,
                        message:
                          "Votre description ne doit pas comporter plus de 5000 caractères",
                      },
                    })}
                    id="description"
                    defaultValue={state.form.description}
                    minRows={5}
                    maxRows={15}
                    className={`bg-transparent text-brown-50 block w-full ${
                      !errors.description
                        ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
                        : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    } disabled:opacity-50`}
                    placeholder="Matériaux, dimensions, particularités, etc."
                    aria-invalid={!!errors.description}
                    aria-describedby="description-error"
                    onChange={e => {
                      actions.updateForm({
                        description: e.target.value,
                      });
                    }}
                  />
                </div>
                {errors.description && (
                  <p
                    className="flex mt-2 text-sm text-red-600"
                    id="description-error"
                  >
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />{" "}
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="mt-16">
        <button
          type="submit"
          className="ml-auto flex items-center font-bold text-5xl sm:text-6xl text-brown-50 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50"
        >
          Valider <RightArrowIcon className="ml-8 w-10 sm:w-12 h-10 sm:h-12" />
        </button>
      </div>
    </form>
  );
};

export default QuotationStepDescription;

import React from "react";
import { useStateMachine } from "little-state-machine";
import { FieldError, useForm } from "react-hook-form";

import { updateForm, updateMeta } from "./stateMachineActions";
import RightArrowIcon from "../icons/right-arrow-icon";
import DownLeftArrowIcon from "../icons/down-left-arrow-icon";
import { QuotationForm } from "../../models/quotationform";
import ExclamationCircleIcon from "../icons/exclamation-circle-icon";
import { analytics } from "../../utilities/g-tag";

type DataProps = {};

const QuotationStepService: React.FC<DataProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuotationForm>();
  const { actions, state } = useStateMachine({ updateForm, updateMeta });

  const onSubmit = data => {
    analytics("event", "depot_step", {
      event_category: "engagement",
      event_label: `Dépôt de projet - Étape prestations`,
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
              Les types de prestations concernés
            </legend>
            <div className="grid sm:grid-cols-3 gap-x-18 mx-auto">
              {state.data.services.map((service, index) => (
                <div key={service.code} className="rounded-md -space-y-px">
                  <div className="relative py-4 flex">
                    <div className="flex items-center h-5">
                      <input
                        id={`service-option-${index}`}
                        {...register("servicesIds", {
                          required: "Vous devez sélectionner une option",
                        })}
                        type="checkbox"
                        className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50"
                        value={service.code}
                        defaultChecked={state.form.servicesIds.includes(
                          service.code as string
                        )}
                        onChange={e =>
                          actions.updateForm({
                            servicesIds: e.target.checked
                              ? [...state.form.servicesIds, e.target.value]
                              : [
                                  ...state.form.servicesIds.filter(
                                    s => s !== e.target.value
                                  ),
                                ],
                          })
                        }
                      />
                    </div>
                    <label
                      htmlFor={`service-option-${index}`}
                      className="ml-8 flex flex-col cursor-pointer"
                    >
                      <span className="block text-xsm text-brown-50 font-bold uppercase">
                        {service.label}
                      </span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            {errors.servicesIds && (
              <p className="flex mt-4 text-sm text-red-600" id="service-error">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />{" "}
                {((errors.servicesIds as unknown) as FieldError)?.message}
              </p>
            )}
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

export default QuotationStepService;

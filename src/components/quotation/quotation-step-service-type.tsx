import React from "react";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";

import { updateForm, updateMeta } from "./stateMachineActions";
import RightArrowIcon from "../icons/right-arrow-icon";
import DownLeftArrowIcon from "../icons/down-left-arrow-icon";
import { QuotationForm } from "../../models/quotationform";
import ExclamationCircleIcon from "../icons/exclamation-circle-icon";
import { analytics } from "../../utilities/g-tag";

type DataProps = {};

const QuotationStepSpendingLimit: React.FC<DataProps> = () => {
  const {
    register,
    getValues,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<QuotationForm>();
  const { actions, state } = useStateMachine({ updateForm, updateMeta });

  const onSubmit = data => {
    analytics("event", "depot_step", {
      event_category: "engagement",
      event_label: `Dépôt de projet - Étape budget`,
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
            Où en êtes-vous dans votre projet
            </legend>
            <div className="grid sm:grid-cols-3 gap-x-18 mx-auto">



              {state.data.serviceTypes.map((serviceType, index) => (
                <div key={serviceType.code} className="rounded-md -space-y-px">
                  <div className="relative py-4 flex">
                    <div className="flex items-center h-5">
                      <input
                        id={`serviceType-option-${index}`}
                        {...register("serviceTypeId", {
                          required: "Vous devez sélectionner une option",
                        })}
                        type="radio"
                        className="bg-gris-800 mt-2  h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50"
                        value={serviceType.code}
                        defaultChecked={
                          state.form.serviceTypeId === serviceType.code
                        }
                        onChange={e =>
                          actions.updateForm({ serviceTypeId: e.target.value })
                        }
                      />
                    </div>
                    <label
                      htmlFor={`serviceType-option-${index}`}
                      className="ml-8 flex flex-col text-brown-50 cursor-pointer"
                    >

                      <span className="text-sm">
                        {serviceType.description}
                      </span>
                    </label>
                  </div>
                </div>
              ))}


              {errors.serviceTypeId && (
                <p
                  className="flex mt-4 text-sm text-red-600"
                  id="serviceTypeId-error"
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />{" "}
                  {errors.serviceTypeId.message}
                </p>
              )}
              {state.form.serviceTypeId === '1073320e-b576-445a-b9cb-a9a84d484aa0' && (
                <div className="sm:col-span-3 mt-6">
                  <div className="text-brown-50 mb-4">
                  Nombre de devis souhaité(s)
                  </div>
                  <div className="grid sm:grid-cols-3 gap-x-18 mx-auto">
                    {[1, 2, 3].map((i, index) => (
                      <div
                        key={i}
                        className="rounded-md -space-y-px"
                      >
                        <div className="relative py-4 flex">
                          <div className="flex items-center h-5">
                            <input
                              id={`creatorConsultationLimitId-option-${index}`}
                              {...register("creatorConsultationLimitId", {
                                validate: {
                                  required: value =>
                                    !!getValues("creatorConsultationLimitId") || !!value
                                      ? true
                                      : "Vous devez sélectionner une option",
                                },
                              })}
                              type="radio"
                              className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50"
                              value={i}
                              defaultChecked={
                                state.form.creatorConsultationLimitId === i
                              }
                              onChange={e =>
                                actions.updateForm({
                                  creatorConsultationLimitId: e.target.value,
                                })
                              }
                            />
                          </div>
                          <label
                            htmlFor={`creatorConsultationLimitId-option-${index}`}
                            className="ml-8 flex flex-col cursor-pointer"
                          >
                            <span className="block text-xsm text-brown-50 font-bold uppercase">
                              {i}
                            </span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.creatorConsultationLimitId && (
                    <p
                      className="flex mt-4 text-sm text-red-600"
                      id="creatorConsultationLimitId-error"
                    >
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />{" "}
                      {errors.creatorConsultationLimitId.message}
                    </p>
                  )}
                </div>
              )}
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

export default QuotationStepSpendingLimit;

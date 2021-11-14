import React from "react";
import { useStateMachine } from "little-state-machine";
import { Controller, useForm } from "react-hook-form";

import { updateForm, updateMeta } from "./stateMachineActions";
import RightArrowIcon from "../icons/right-arrow-icon";
import DownLeftArrowIcon from "../icons/down-left-arrow-icon";
import { QuotationForm } from "../../models/quotationform";
import ExclamationCircleIcon from "../icons/exclamation-circle-icon";
import DatePicker from "../date-picker/date-picker";
import { analytics } from "../../utilities/g-tag";

type DataProps = {};

const QuotationStepShippingDate: React.FC<DataProps> = () => {
  const {
    register,
    getValues,
    setValue,
    trigger,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<QuotationForm>();
  const { actions, state } = useStateMachine({ updateForm, updateMeta });

  const onSubmit = data => {
    analytics("event", "depot_step", {
      event_category: "engagement",
      event_label: `Dépôt de projet - Étape date de livraison`,
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
              Pour quand est la livraison de votre projet ?
            </legend>
            <div className="grid sm:grid-cols-2 gap-x-18 mx-auto">
              <div>
                <div className="mt-1 relative sm:mb-24">
                  <div className="flex items-center">
                    <Controller
                      control={control}
                      name="shippingDeadlineDate"
                      rules={{
                        validate: {
                          required: value =>
                            !!getValues("hasNoPreciseTimeLimit ") || !!value
                              ? true
                              : "Vous devez sélectionner une date",
                        },
                      }}
                      defaultValue={state.form.shippingDeadlineDate}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <DatePicker
                          name="shippingDeadlineDate"
                          onChange={e => {
                            onChange(e.target.value);
                            actions.updateForm({
                              shippingDeadlineDate: e.target.value,
                            });

                            if (e.target.value) {
                              actions.updateForm({
                                hasNoPreciseTimeLimit : false,
                              });
                              setValue("hasNoPreciseTimeLimit ", false);
                            }
           
                          }}
                          onBlur={onBlur}
                          value={value}
                          max={state.form.shippingDeadlineDateEnd}
                        />
                      )}
                      class="mt-4 mb-12"
                    />
                    <RightArrowIcon className="w-6 h-6 text-brown-50 px-1 flex-shrink-0" />
                    <Controller
                      control={control}
                      name="shippingDeadlineDateEnd"
                      defaultValue={state.form.shippingDeadlineDateEnd}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <DatePicker
                          name="shippingDeadlineDateEnd"
                          onChange={e => {
                            onChange(e.target.value);
                            actions.updateForm({
                              shippingDeadlineDateEnd: e.target.value,
                            });
                          }}
                          onBlur={onBlur}
                          value={value}
                          min={state.form.shippingDeadlineDate}
                        />
                      )}
                      class="mt-4 mb-12"
                    />
                  </div>
                  {errors.shippingDeadlineDate && (
                    <p
                      className="flex mt-4 text-sm text-red-600"
                      id="shippingDeadlineDate-error"
                    >
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />{" "}
                      {errors.shippingDeadlineDate.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="rounded-md -space-y-px">
                <div className="relative py-4 flex">
                  <div className="flex items-center h-5">
                    <input
                      id={`hasNoPreciseTimeLimit `}
                      {...register("hasNoPreciseTimeLimit ")}
                      type="checkbox"
                      className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50"
                      defaultChecked={state.form.hasNoPreciseTimeLimit }
                      onChange={e => {
                        actions.updateForm({
                          hasNoPreciseTimeLimit : e.target.checked,
                        });
                        setValue("hasNoPreciseTimeLimit ", e.target.checked);

                        if (e.target.checked) {
                          actions.updateForm({
                            shippingDeadlineDate: null,
                          });
                          setValue("shippingDeadlineDate", null);
                        }

                        trigger("shippingDeadlineDate");
                      }}
                    />
                  </div>
                  <label
                    htmlFor={`hasNoPreciseTimeLimit `}
                    className="ml-8 flex flex-col cursor-pointer"
                  >
                    <span className="block text-xsm text-brown-50 font-bold uppercase">
                      Je n'ai pas de délai précis
                    </span>
                  </label>
                </div>
                {errors.hasNoPreciseTimeLimit  && (
                  <p
                    className="flex mt-4 text-sm text-red-600"
                    id="hasNoPreciseTimeLimit -error"
                  >
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />{" "}
                    {errors.hasNoPreciseTimeLimit .message}
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

export default QuotationStepShippingDate;

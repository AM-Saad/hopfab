import React from "react";
import { useStateMachine } from "little-state-machine";
import { Controller, useForm } from "react-hook-form";

import { updateForm, updateMeta } from "./stateMachineActions";
import RightArrowIcon from "../icons/right-arrow-icon";
import DownLeftArrowIcon from "../icons/down-left-arrow-icon";
import { QuotationForm } from "../../models/quotationform";
import TextareaAutosize from "react-textarea-autosize";
import ExclamationCircleIcon from "../icons/exclamation-circle-icon";
import PlaceAutocompleteInput from "../place-autocomplete-input/place-autocomplete-input";
import { analytics } from "../../utilities/g-tag";

type DataProps = {};

const QuotationStepShippingLocation: React.FC<DataProps> = () => {
  const {
    setValue,
    trigger,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<QuotationForm>();
  const { actions, state } = useStateMachine({ updateForm, updateMeta });

  const onSubmit = data => {
    analytics("event", "depot_step", {
      event_category: "engagement",
      event_label: `Dépôt de projet - Étape lieu de livraison`,
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
             Où se situe votre projet ?
            </legend>
            <div className="grid gap-y-6 mx-auto">
              <div>
                <label htmlFor="shippingAddressFormatted" className="sr-only">
                  Adresse de livraison
                </label>
                <div className="mt-1 relative">
                  <Controller
                    control={control}
                    name="shippingAddressFormatted"
                    rules={{
                      required: "Vous devez sélectionner un lieu de livraison",
                    }}
                    defaultValue={state.form.shippingAddressFormatted}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <PlaceAutocompleteInput
                        id="shippingAddressFormatted"
                        name="shippingAddressFormatted"
                        defaultValue={value}
                        onChange={e => {
                          actions.updateForm({
                            shippingAddressFormatted: e.target.value,
                            shippingAddress: null,
                          });
                          onChange(e.target.value);
                        }}
                        onPlaceSelected={(
                          placeResult: google.maps.places.PlaceResult | null
                        ) => {
                          actions.updateForm(
                            placeResult
                              ? {
                                  shippingAddressFormatted:
                                    placeResult?.formatted_address,
                                  shippingAddress: {
                                    streetAddress: `${
                                      placeResult?.address_components.filter(
                                        c => c.types.includes("street_number")
                                      )?.[0]?.long_name ?? ""
                                    } ${
                                      placeResult?.address_components.filter(
                                        c => c.types.includes("route")
                                      )?.[0]?.long_name ?? ""
                                    }`,
                                    streetAddressBis: "",
                                    postalCode:
                                      placeResult?.address_components.filter(
                                        c => c.types.includes("postal_code")
                                      )?.[0]?.long_name ?? "",
                                    city:
                                      placeResult?.address_components.filter(
                                        c => c.types.includes("locality")
                                      )?.[0]?.long_name ?? "",
                                  },
                                }
                              : {
                                  shippingAddressFormatted: "",
                                  shippingAddress: null,
                                }
                          );
                          onChange(placeResult?.formatted_address);
                        }}
                        placeholder="Indiquez une adresse, un code postal, une ville"
                        className={`bg-transparent text-brown-50 block w-full pr-10 ${
                          !errors.shippingAddressFormatted
                            ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
                            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                        } disabled:opacity-50`}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  {errors.shippingAddressFormatted && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.shippingAddressFormatted && (
                  <p
                    className="mt-4 text-sm text-red-600"
                    id="shippingAddressFormatted-error"
                  >
                    {errors.shippingAddressFormatted.message}
                  </p>
                )}
              </div>
                          <div className="rounded-md -space-y-px">
                              <div className="relative py-4 flex">
                                  <div className="flex items-center h-5">
                                      <input
                                          id={`shippingAddressProximity`}
                                          {...register("shippingAddressProximity")}
                                          type="checkbox"
                                          className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50"
                                          defaultChecked={state.form.shippingAddressProximity}
                                          onChange={e => {
                                              actions.updateForm({
                                                  shippingAddressProximity: e.target.checked,
                                              });
                                              setValue("shippingAddressProximity", e.target.checked);

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
                                      htmlFor={`shippingAddressProximity`}
                                      className="ml-8 flex flex-col cursor-pointer"
                                  >
                                      <span className="block text-xsm text-brown-50 font-bold uppercase">
                                          La proximité de l'atelier est un critère important
                    </span>
                                  </label>
                              </div>
                              {errors.shippingAddressProximity && (
                                  <p
                                      className="flex mt-4 text-sm text-red-600"
                                      id="shippingAddressProximity-error"
                                  >
                                      <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />{" "}
                                      {errors.shippingAddressProximity.message}
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

export default QuotationStepShippingLocation;

import React, { useState, useEffect } from "react";
import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";

import { updateForm, updateMeta } from "./stateMachineActions";
import RightArrowIcon from "../icons/right-arrow-icon";
import { QuotationForm } from "../../models/quotationform";
import ExclamationCircleIcon from "../icons/exclamation-circle-icon";
import DownLeftArrowIcon from "../icons/down-left-arrow-icon";

import { analytics } from "../../utilities/g-tag";

type DataProps = {};

const QuotationStepProjectKnowHow: React.FC<DataProps> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<QuotationForm>();
    const { actions, state } = useStateMachine({ updateForm, updateMeta });



    const onSubmit = (data) => {
        analytics("event", "depot_step", {
            event_category: "engagement",
            event_label: `Dépôt de projet - savoir-faire`,
        });
        actions.updateMeta({ currentStep: state.meta.currentStep + 1 });

    };
    const requriedItems = [
        "Béton",
        "Bois",
        "Caoutchouc",
        "Céramique",
        "Enduits minéraux",
        "Fibres végétales",
        "Matériau composite",
        "Matériaux recyclés",
        "Métal",
        "Papier/Carton",
        "Pierre",
        "Placage",
        "Plastique/Résine",
        "Plâtre",
        "Terre crue",
        "Terre cuite",
        "Tissu/Cuir",
        "Végétaux",
        "Verre",
      ];
      const presestItems = [];
      state.data.materials.forEach((i) => {
        if (requriedItems.includes(i.label)) {
          presestItems.push(i);
        }
      });
  




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
                        Les types de matériaux recherchés
            </legend>
                        <div className="gap-x-18 grid h-40 mx-auto overflow-y-scroll sm:grid-cols-3">
                            {presestItems.map((material, index) => (
                                <div key={material.code} className="rounded-md -space-y-px">
                                    <div className="relative py-4 flex">
                                        <div className="flex items-center h-5">
                                            <input
                                                id={`material-option-${index}`}
                                                {...register("materialsIds", {
                                                    required: "Vous devez sélectionner une option",
                                                })}
                                                type="checkbox"
                                                className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50"
                                                value={material.code}
                                                defaultChecked={state.form.materialsIds.includes(
                                                    material.code as string
                                                )}
                                                onChange={e =>
                                                    actions.updateForm({
                                                        materialsIds: e.target.checked
                                                            ? [...state.form.materialsIds, e.target.value]
                                                            : [
                                                                ...state.form.materialsIds.filter(
                                                                    s => s !== e.target.value
                                                                ),
                                                            ],
                                                    })
                                                }
                                            />
                                        </div>
                                        <label
                                            htmlFor={`material-option-${index}`}
                                            className="ml-8 flex flex-col cursor-pointer"
                                        >
                                            <span className="block text-xsm text-brown-50 font-bold uppercase">
                                                {material.label}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>


                        {errors.materialsId && (
                            <p
                                className="flex mt-2 text-sm text-red-600"
                                id="materialsId-error"
                            >
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />{" "}
                                {errors.materialsId.message}
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

export default QuotationStepProjectKnowHow;

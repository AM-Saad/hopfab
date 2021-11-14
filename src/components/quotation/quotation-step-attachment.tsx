import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

import { updateMeta, updateAttachments, updateForm } from "./stateMachineActions";
import { analytics } from "../../utilities/g-tag";
import FileUpload from "../file-upload/file-upload";
import { QuotationForm } from "../../models/quotationform";
import DownLeftArrowIcon from "../icons/down-left-arrow-icon";
import RightArrowIcon from "../icons/right-arrow-icon";

type DataProps = {
  className?: string;
};
const documentsTypes = [
  "Croquis",
  "Photos de l'existant",
  "Photos d'inspiration",
  "Elévations",
  "3D",
  "Descriptif du projet"
]

const QuotationStepAttachment: React.FC<DataProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuotationForm>();
  const { actions, state } = useStateMachine({ updateMeta, updateAttachments, updateForm });

  const onSubmit = data => {
    analytics("event", "depot_step", {
      event_category: "engagement",
      event_label: `Dépôt de projet - Étape pièces jointes`,
    });
    actions.updateMeta({ currentStep: state.meta.currentStep + 1 });
  };

  const chooseDocument = (e) => {
    actions.updateForm({
      documentsTypes: e.target.checked ? [...state.form.documentsTypes, e.target.value] : [...state.form.documentsTypes.filter(s => s !== e.target.value),],
    })
  }
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
              Vos documents
            </legend>


            <div className="grid sm:grid-cols-3 gap-x-18 mx-auto">
              {documentsTypes.map((i, index) => (
                <div key={i} className="rounded-md -space-y-px">
                  <div className="relative py-4 flex">
                    <div className="flex items-center h-5">
                      <input
                        id={`docuements-option-${index}`}
                        {...register("documentsTypes", {
                          required: "Vous devez sélectionner une option",
                        })}
                        type="checkbox"
                        className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50"
                        value={i}
                        defaultChecked={state.form.documentsTypes.includes(i)}
                        onChange={e => chooseDocument(e)}


                      />
                    </div>
                    <label
                      htmlFor={`docuements-option-${index}`}
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
            {errors.documentsTypes && (
              <p className="flex mt-4 text-sm text-red-600" id="docuements-error">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />{" "}
                {((errors.documentsTypes as unknown) as FieldError) ?.message}
              </p>
            )}
            <div className="mt-8">

              <div className="text-brown-50 mb-4">Chargement de vos documents</div>

              <div className="mx-auto">
                <FileUpload
                  required={true}
                  fileUploadUrl={`${process.env.GATSBY_HOPFAB_REST_API_URL}/forms`}
                  blobStorageUrl={process.env.GATSBY_BLOBSTORAGE_URL}
                  containerName={"forms-particulier"}
                  allowFileSizeValidation={true}
                  maxFileSize={"200MB"}
                  allowFileTypeValidation={false}
                  acceptedFileTypes={[]}
                  allowMultiple={true}
                  maxFiles={100}
                  files={state.form.attachments}
                  setFiles={actions.updateAttachments}
                />
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

export default QuotationStepAttachment;

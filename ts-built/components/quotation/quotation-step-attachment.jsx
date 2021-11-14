"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var little_state_machine_1 = require("little-state-machine");
var stateMachineActions_1 = require("./stateMachineActions");
var g_tag_1 = require("../../utilities/g-tag");
var down_left_arrow_icon_1 = require("../icons/down-left-arrow-icon");
var right_arrow_icon_1 = require("../icons/right-arrow-icon");
var documentsTypes = [
    "Croquis",
    "Photos de l'existant",
    "Photos d'inspiration",
    "Elévations",
    "3D",
    "Descriptif du projet"
];
var QuotationStepAttachment = function (_a) {
    var _b;
    var className = _a.className;
    var _c = react_hook_form_1.useForm(), register = _c.register, handleSubmit = _c.handleSubmit, errors = _c.formState.errors;
    var _d = little_state_machine_1.useStateMachine({ updateMeta: stateMachineActions_1.updateMeta, updateAttachments: stateMachineActions_1.updateAttachments, updateForm: stateMachineActions_1.updateForm }), actions = _d.actions, state = _d.state;
    var onSubmit = function (data) {
        g_tag_1.analytics("event", "depot_step", {
            event_category: "engagement",
            event_label: "D\u00E9p\u00F4t de projet - \u00C9tape pi\u00E8ces jointes",
        });
        actions.updateMeta({ currentStep: state.meta.currentStep + 1 });
    };
    var chooseDocument = function (e) {
        console.log(state);
        actions.updateForm({
            documentType: e.target.checked ? __spreadArray(__spreadArray([], state.form.documentType), [e.target.value]) : __spreadArray([], state.form.documentType.filter(function (s) { return s !== e.target.value; })),
        });
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
            <legend className="font-bold text-5xl sm:text-7.5xl text-brown-50 mb-8">
              Vos documents
            </legend>


            <div className="grid sm:grid-cols-3 gap-x-18 mx-auto">
              {documentsTypes.map(function (i, index) { return (<div key={i} className="rounded-md -space-y-px">
                  <div className="relative py-4 flex">
                    <div className="flex items-center h-5">
                      <input id={"docuements-option-" + index} {...register("documentsTypes", {
            required: "Vous devez sélectionner une option",
        })} type="checkbox" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value={i} 
        // defaultChecked={state.form.documentType.includes(i)}
        onChange={function (e) { return chooseDocument(e); }}/>
                    </div>
                    <label htmlFor={"docuements-option-" + index} className="ml-8 flex flex-col cursor-pointer">
                      <span className="block text-xsm text-brown-50 font-bold uppercase">
                        {i}
                      </span>
                    </label>
                  </div>
                </div>); })}
            </div>
            {errors.documentType && (<p className="flex mt-4 text-sm text-red-600" id="docuements-error">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2"/>{" "}
                {(_b = errors.documentType) === null || _b === void 0 ? void 0 : _b.message}
              </p>)}
            {/* <div className="mt-8">

          <div className="text-brown-50 mb-4">Chargement de vos documents</div>

          <div className="mx-auto">
            <FileUpload
              required={false}
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
        </div> */}

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
exports.default = QuotationStepAttachment;
//# sourceMappingURL=quotation-step-attachment.jsx.map
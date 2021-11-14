"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var little_state_machine_1 = require("little-state-machine");
var react_hook_form_1 = require("react-hook-form");
var lodash_1 = require("lodash");
var http_1 = require("@hopfab/http");
var stateMachineActions_1 = require("./stateMachineActions");
var right_arrow_icon_1 = require("../icons/right-arrow-icon");
var down_left_arrow_icon_1 = require("../icons/down-left-arrow-icon");
var exclamation_circle_icon_1 = require("../icons/exclamation-circle-icon");
var g_tag_1 = require("../../utilities/g-tag");
var SectionContact = function (_a) {
    var register = _a.register, errors = _a.errors;
    var _b = little_state_machine_1.useStateMachine({ updateForm: stateMachineActions_1.updateForm, updateMeta: stateMachineActions_1.updateMeta }), actions = _b.actions, state = _b.state;
    return (<>
      <div>
        <label htmlFor="lastName" className="block text-sm font-bold text-brown-50 uppercase">
          Nom
        </label>
        <div className="mt-1 relative">
          <input type="text" id="lastName" {...register("lastName", {
        required: "Votre nom est requis",
        maxLength: {
            value: 50,
            message: "Votre nom ne doit pas comporter plus de 50 caractères",
        },
    })} defaultValue={state.form.contact.lastName} className={"bg-transparent text-brown-50 block w-full pr-10 " + (!errors.lastName
            ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500") + " disabled:opacity-50"} placeholder="Dupont" aria-invalid={!!errors.lastName} aria-describedby="lastName-error" onChange={function (e) {
            return actions.updateForm({
                contact: __assign(__assign({}, state.form.contact), { lastName: e.target.value }),
            });
        }}/>
          {errors.lastName && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500"/>
            </div>)}
        </div>
        {errors.lastName && (<p className="mt-2 text-sm text-red-600" id="lastName-error">
            {errors.lastName.message}
          </p>)}
      </div>
      <div>
        <label htmlFor="firstName" className="block text-sm font-bold text-brown-50 uppercase">
          Prénom
        </label>
        <div className="mt-1 relative">
          <input type="text" id="firstName" {...register("firstName", {
        required: "Votre prénom est requis",
        maxLength: {
            value: 50,
            message: "Votre prénom ne doit pas comporter plus de 50 caractères",
        },
    })} defaultValue={state.form.contact.firstName} className={"bg-transparent text-brown-50 block w-full pr-10 " + (!errors.firstName
            ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500") + " disabled:opacity-50"} placeholder="Jean" aria-invalid={!!errors.firstName} aria-describedby="firstName-error" onChange={function (e) {
            return actions.updateForm({
                contact: __assign(__assign({}, state.form.contact), { firstName: e.target.value }),
            });
        }}/>
          {errors.firstName && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500"/>
            </div>)}
        </div>
        {errors.firstName && (<p className="mt-2 text-sm text-red-600" id="firstName-error">
            {errors.firstName.message}
          </p>)}
          </div>


    <div>
        <label htmlFor="entreprise" className="block text-sm font-bold text-brown-50 uppercase">
          Entreprise
        </label>
        <div className="mt-1 relative">
          <input type="text" id="entreprise" inputMode="entreprise" {...register("entreprise", {
        required: "Votre adresse entreprise est requise",
        maxLength: {
            value: 50,
            message: "Votre entreprise ne doit pas comporter plus de 50 caractères",
        },
    })} defaultValue={state.form.contact.entreprise} className={"bg-transparent text-brown-50 block w-full pr-10 " + (!errors.entreprise
            ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500") + " disabled:opacity-50"} placeholder="" aria-invalid={!!errors.entreprise} aria-describedby="entreprise-error" onChange={function (e) {
            return actions.updateForm({
                contact: __assign(__assign({}, state.form.contact), { entreprise: e.target.value }),
            });
        }}/>
          {errors.entreprise && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500"/>
            </div>)}
        </div>
        {errors.email && (<p className="mt-2 text-sm text-red-600" id="email-error">
            {errors.email.message}
          </p>)}
      </div>


      <div>
        <label htmlFor="email" className="block text-sm font-bold text-brown-50 uppercase">
          Adresse e-mail
        </label>
        <div className="mt-1 relative">
          <input type="text" id="email" inputMode="email" {...register("email", {
        required: "Votre adresse e-mail est requise",
        maxLength: {
            value: 50,
            message: "Votre adresse e-mail ne doit pas comporter plus de 50 caractères",
        },
        pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Votre adresse e-mail n'est pas valide",
        },
    })} defaultValue={state.form.contact.email} className={"bg-transparent text-brown-50 block w-full pr-10 " + (!errors.email
            ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500") + " disabled:opacity-50"} placeholder="votre@email.com" aria-invalid={!!errors.email} aria-describedby="email-error" onChange={function (e) {
            return actions.updateForm({
                contact: __assign(__assign({}, state.form.contact), { email: e.target.value }),
            });
        }}/>
          {errors.email && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500"/>
            </div>)}
        </div>
        {errors.email && (<p className="mt-2 text-sm text-red-600" id="email-error">
            {errors.email.message}
          </p>)}
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-bold text-brown-50 uppercase">
          Numéro de téléphone
        </label>
        <div className="mt-1 relative">
          <input type="text" id="phoneNumber" inputMode="tel" autoComplete="tel" {...register("phoneNumber", {
        required: "Votre numéro de téléphone est requis",
        maxLength: {
            value: 20,
            message: "Votre numéro de téléphone ne doit pas comporter plus de 20 caractères",
        },
    })} defaultValue={state.form.contact.phoneNumber} className={"bg-transparent text-brown-50 block w-full pr-10 " + (!errors.phoneNumber
            ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500") + " disabled:opacity-50"} aria-invalid={!!errors.phoneNumber} aria-describedby="phoneNumber-error" onChange={function (e) {
            return actions.updateForm({
                contact: __assign(__assign({}, state.form.contact), { phoneNumber: e.target.value }),
            });
        }}/>
          {errors.phoneNumber && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500"/>
            </div>)}
        </div>
        {errors.phoneNumber && (<p className="mt-2 text-sm text-red-600" id="phoneNumber-error">
            {errors.phoneNumber.message}
          </p>)}
      </div>
    </>);
};
var QuotationStepContact = function () {
    var _a = react_1.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react_1.useState(false), isOpenInformations = _b[0], setIsOpenInformations = _b[1];
    var _c = react_1.useState(null), backendError = _c[0], setBackendError = _c[1];
    var _d = react_hook_form_1.useForm(), register = _d.register, handleSubmit = _d.handleSubmit, errors = _d.formState.errors;
    var _e = little_state_machine_1.useStateMachine({ updateForm: stateMachineActions_1.updateForm, updateMeta: stateMachineActions_1.updateMeta }), actions = _e.actions, state = _e.state;
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var payload, headers, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setBackendError(null);
                    setIsLoading(true);
                    payload = __assign(__assign({}, lodash_1.cloneDeep(state.form)), { attachmentsUrls: state.form.attachments.map(function (f) { return f.source; }) });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    headers = new Headers();
                    headers.append("Content-Type", "application/json; charset=utf-8");
                    return [4 /*yield*/, http_1.post(process.env.GATSBY_DEPOT_PROJET_SENDER_URL, JSON.stringify(payload), {
                            headers: headers,
                        })];
                case 2:
                    _a.sent();
                    g_tag_1.analytics("event", "filled_form", {
                        event_category: "engagement",
                        event_label: "Formulaire de dépôt de projet rempli",
                        value: state.form.spendinglimit,
                    });
                    actions.updateMeta({ currentStep: state.meta.currentStep + 1 });
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    setBackendError(e_1.message);
                    return [3 /*break*/, 4];
                case 4:
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
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
                          Vous êtes

            </legend>

                      <div className="grid sm:grid-cols-3 gap-x-18 mx-auto">
              {state.data.clientTypes.map(function (clientType, index) { return (<div key={clientType.code} className="rounded-md -space-y-px">
                  <div className="relative py-4 flex">
                    <div className="flex items-center h-5">
                      <input id={"clientType-option-" + index} {...register("clientType", {
            required: "Vous devez sélectionner une option",
        })} type="radio" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" value={clientType.code} defaultChecked={state.form.clientType === clientType.code} onChange={function (e) {
                actions.updateForm({ clientType: e.target.value });
                setIsOpenInformations(true);
            }}/>
                    </div>
                    <label htmlFor={"clientType-option-" + index} className="ml-8 flex flex-col cursor-pointer">
                      <span className="block text-xsm text-brown-50 font-bold uppercase">
                        {clientType.label}
                      </span>
                    </label>
                  </div>
                </div>); })}
            </div>
                      <div className={"grid sm:grid-cols-2 gap-x-18 gap-y-6 mx-auto " + (isOpenInformations === false ? 'hidden' : '') + " "}>
              <SectionContact name="contact" register={register} errors={errors}/>
                          <div className="rounded-md -space-y-px mt-6">
                              <div className="relative py-4 flex">
                                  <div className="flex items-center h-5">
                                      <input id={"cgu"} {...register("cgu", {
        required: "Vous devez accepter les Conditions Générales d'Utilisation pour pouvoir déposer un projet",
    })} type="checkbox" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" defaultChecked={state.form.cgu} onChange={function (e) {
            actions.updateForm({
                cgu: e.target.checked,
            });
        }}/>
                                  </div>
                                  <label htmlFor={"cgu"} className="ml-8 flex flex-col cursor-pointer">
                                      <span className="block text-xsm text-brown-50 font-bold uppercase">
                                          J'accepte les{" "}
                                          <a href="/mentions-legales" target="_blank" className="underline">
                                              Conditions Générales d'Utilisation
                    </a>
                                      </span>
                                  </label>
                              </div>
                              {errors.cgu && (<p className="flex mt-4 text-sm text-red-600" id="cgu-error">
                                      <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500 mr-2"/>{" "}
                                      {errors.cgu.message}
                                  </p>)}
                          </div>
                          {backendError && (<p className="mt-2 text-sm text-red-600">{backendError}</p>)}
            </div>
           
          </fieldset>
        </div>
      </div>
      <div className="flex justify-end mt-16">
        {!isLoading && (<button type="submit" className="flex items-center font-bold text-5xl sm:text-6xl text-brown-50 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gris-800 focus-visible:ring-brown-50">
            Lancer <right_arrow_icon_1.default className="ml-8 w-10 sm:w-12 h-10 sm:h-12"/>
          </button>)}
        {isLoading && (<div className="font-bold text-5xl sm:text-6xl text-brown-50">
            Envoi du projet en cours ...
          </div>)}
      </div>
    </form>);
};
exports.default = QuotationStepContact;
//# sourceMappingURL=quotation-step-contact.jsx.map
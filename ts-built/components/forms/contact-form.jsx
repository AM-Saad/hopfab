"use strict";
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
var http_1 = require("@hopfab/http");
var react_hook_form_1 = require("react-hook-form");
var react_textarea_autosize_1 = require("react-textarea-autosize");
var exclamation_circle_icon_1 = require("../icons/exclamation-circle-icon");
var check_circle_icon_1 = require("../icons/check-circle-icon");
var g_tag_1 = require("../../utilities/g-tag");
var ContactForm = function (_a) {
    var className = _a.className;
    var _b = react_hook_form_1.useForm(), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.formState.errors;
    var _c = react_1.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = react_1.useState(false), isSuccess = _d[0], setIsSuccess = _d[1];
    var _e = react_1.useState(null), backendError = _e[0], setBackendError = _e[1];
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setBackendError(null);
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, http_1.post("" + process.env.GATSBY_CONTACT_SENDER_URL, JSON.stringify(data))];
                case 2:
                    _a.sent();
                    setIsSuccess(true);
                    g_tag_1.analytics("event", "filled_form", {
                        event_category: "engagement",
                        event_label: "Formulaire de contact rempli",
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setBackendError("Une erreur est survenue. Veuillez réessayer.");
                    return [3 /*break*/, 4];
                case 4:
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (<form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div>
        <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 uppercase">
          Nom
        </label>
        <div className="mt-1 relative">
          <input type="text" id="lastName" {...register("lastName", {
        required: "Votre nom est requis",
        maxLength: {
            value: 50,
            message: "Votre nom ne doit pas comporter plus de 50 caractères",
        },
    })} defaultValue="" className={"bg-transparent block w-full pr-10 " + (!errors.lastName
            ? "border-gris-700 focus:ring-brown-700 focus:border-brown-700"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500") + " disabled:opacity-50"} placeholder="Dupont" disabled={isSuccess} aria-invalid={!!errors.lastName} aria-describedby="lastName-error"/>
          {errors.lastName && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500"/>
            </div>)}
        </div>
        {errors.lastName && (<p className="mt-2 text-sm text-red-600" id="lastName-error">
            {errors.lastName.message}
          </p>)}
      </div>
      <div>
        <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 uppercase">
          Prénom
        </label>
        <div className="mt-1 relative">
          <input type="text" id="firstName" {...register("firstName", {
        required: "Votre prénom est requis",
        maxLength: {
            value: 50,
            message: "Votre prénom ne doit pas comporter plus de 50 caractères",
        },
    })} defaultValue="" className={"bg-transparent block w-full pr-10 " + (!errors.firstName
            ? "border-gris-700 focus:ring-brown-700 focus:border-brown-700"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500") + " disabled:opacity-50"} placeholder="Jean" disabled={isSuccess} aria-invalid={!!errors.firstName} aria-describedby="firstName-error"/>
          {errors.firstName && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500"/>
            </div>)}
        </div>
        {errors.firstName && (<p className="mt-2 text-sm text-red-600" id="firstName-error">
            {errors.firstName.message}
          </p>)}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase">
          Adresse e-mail
        </label>
        <div className="mt-1 relative">
          <input type="text" id="email" {...register("email", {
        required: "Votre adresse e-mail est requise",
        maxLength: {
            value: 50,
            message: "Votre adresse e-mail ne doit pas comporter plus de 50 caractères",
        },
        pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Votre adresse e-mail n'est pas valide",
        },
    })} inputMode="email" defaultValue="" className={"bg-transparent block w-full pr-10 " + (!errors.email
            ? "border-gris-700 focus:ring-brown-700 focus:border-brown-700"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500") + " disabled:opacity-50"} placeholder="votre@email.com" disabled={isSuccess} aria-invalid={!!errors.email} aria-describedby="email-error"/>
          {errors.email && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500"/>
            </div>)}
        </div>
        {errors.email && (<p className="mt-2 text-sm text-red-600" id="email-error">
            {errors.email.message}
          </p>)}
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-700 uppercase">
          Numéro de téléphone{" "}
          <span className="lowercase font-medium">(optionnel)</span>
        </label>
        <div className="mt-1 relative">
          <input type="text" id="phoneNumber" {...register("phoneNumber", {
        maxLength: {
            value: 50,
            message: "Votre numéro de téléphone ne doit pas comporter plus de 50 caractères",
        },
    })} inputMode="tel" autoComplete="tel" defaultValue="" className={"bg-transparent block w-full pr-10 " + (!errors.phoneNumber
            ? "border-gris-700 focus:ring-brown-700 focus:border-brown-700"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500") + " disabled:opacity-50"} disabled={isSuccess} aria-invalid={!!errors.phoneNumber} aria-describedby="phoneNumber-error"/>
          {errors.phoneNumber && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500"/>
            </div>)}
        </div>
        {errors.phoneNumber && (<p className="mt-2 text-sm text-red-600" id="phoneNumber-error">
            {errors.phoneNumber.message}
          </p>)}
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-bold text-gray-700 uppercase">
          Message
        </label>
        <div className="mt-1">
          <react_textarea_autosize_1.default id="description" {...register("description", {
        required: "Votre message est requis",
        maxLength: {
            value: 5000,
            message: "Votre message ne doit pas comporter plus de 5000 caractères",
        },
    })} defaultValue="" minRows={5} maxRows={15} className={"bg-transparent block w-full " + (!errors.description
            ? "border-gris-700 focus:ring-brown-700 focus:border-brown-700"
            : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500") + " disabled:opacity-50"} placeholder="Comment Hopfab peut vous aider ?" disabled={isSuccess} aria-invalid={!!errors.description} aria-describedby="description-error"/>
        </div>
        {errors.description && (<p className="mt-2 text-sm text-red-600" id="description-error">
            {errors.description.message}
          </p>)}
      </div>
      {!isSuccess && (<button type="submit" disabled={isLoading} className="mr-auto uppercase text-xsm px-12 py-5 font-bold text-brown-50 bg-brown-700 rounded-full disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50">
          {isLoading ? "Envoi en cours ..." : "Envoyer"}
        </button>)}
      {backendError && (<p className="mt-2 text-sm text-red-600">{backendError}</p>)}
      {isSuccess && (<div className="bg-brown-700 text-brown-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <check_circle_icon_1.default className="h-5 w-5 text-brown-500"/>
            </div>
            <div className="ml-3">
              <p className="text-sm">
                Message envoyé avec succès !
                <a href="#" onClick={function (e) {
                e.preventDefault();
                setIsSuccess(false);
            }} className="font-medium underline ml-2">
                  Envoyer un autre message
                </a>
              </p>
            </div>
          </div>
        </div>)}
    </form>);
};
exports.default = ContactForm;
//# sourceMappingURL=contact-form.jsx.map
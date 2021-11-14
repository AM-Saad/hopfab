"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var little_state_machine_1 = require("little-state-machine");
var react_hook_form_1 = require("react-hook-form");
var stateMachineActions_1 = require("./stateMachineActions");
var right_arrow_icon_1 = require("../icons/right-arrow-icon");
var down_left_arrow_icon_1 = require("../icons/down-left-arrow-icon");
var exclamation_circle_icon_1 = require("../icons/exclamation-circle-icon");
var place_autocomplete_input_1 = require("../place-autocomplete-input/place-autocomplete-input");
var g_tag_1 = require("../../utilities/g-tag");
var QuotationStepShippingLocation = function () {
    var _a = react_hook_form_1.useForm(), setValue = _a.setValue, trigger = _a.trigger, register = _a.register, handleSubmit = _a.handleSubmit, control = _a.control, errors = _a.formState.errors;
    var _b = little_state_machine_1.useStateMachine({ updateForm: stateMachineActions_1.updateForm, updateMeta: stateMachineActions_1.updateMeta }), actions = _b.actions, state = _b.state;
    var onSubmit = function (data) {
        g_tag_1.analytics("event", "depot_step", {
            event_category: "engagement",
            event_label: "D\u00E9p\u00F4t de projet - \u00C9tape lieu de livraison",
        });
        actions.updateMeta({ currentStep: state.meta.currentStep + 1 });
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
             Où se situe votre projet ?
            </legend>
            <div className="grid gap-y-6 mx-auto">
              <div>
                <label htmlFor="shippingAddressFormatted" className="sr-only">
                  Adresse de livraison
                </label>
                <div className="mt-1 relative">
                  <react_hook_form_1.Controller control={control} name="shippingAddressFormatted" rules={{
            required: "Vous devez sélectionner un lieu de livraison",
        }} defaultValue={state.form.shippingAddressFormatted} render={function (_a) {
            var _b = _a.field, onChange = _b.onChange, onBlur = _b.onBlur, value = _b.value;
            return (<place_autocomplete_input_1.default id="shippingAddressFormatted" name="shippingAddressFormatted" defaultValue={value} onChange={function (e) {
                    actions.updateForm({
                        shippingAddressFormatted: e.target.value,
                        shippingAddress: null,
                    });
                    onChange(e.target.value);
                }} onPlaceSelected={function (placeResult) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                    actions.updateForm(placeResult
                        ? {
                            shippingAddressFormatted: placeResult === null || placeResult === void 0 ? void 0 : placeResult.formatted_address,
                            shippingAddress: {
                                streetAddress: ((_c = (_b = (_a = placeResult === null || placeResult === void 0 ? void 0 : placeResult.address_components.filter(function (c) { return c.types.includes("street_number"); })) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.long_name) !== null && _c !== void 0 ? _c : "") + " " + ((_f = (_e = (_d = placeResult === null || placeResult === void 0 ? void 0 : placeResult.address_components.filter(function (c) { return c.types.includes("route"); })) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.long_name) !== null && _f !== void 0 ? _f : ""),
                                streetAddressBis: "",
                                postalCode: (_j = (_h = (_g = placeResult === null || placeResult === void 0 ? void 0 : placeResult.address_components.filter(function (c) { return c.types.includes("postal_code"); })) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.long_name) !== null && _j !== void 0 ? _j : "",
                                city: (_m = (_l = (_k = placeResult === null || placeResult === void 0 ? void 0 : placeResult.address_components.filter(function (c) { return c.types.includes("locality"); })) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.long_name) !== null && _m !== void 0 ? _m : "",
                            },
                        }
                        : {
                            shippingAddressFormatted: "",
                            shippingAddress: null,
                        });
                    onChange(placeResult === null || placeResult === void 0 ? void 0 : placeResult.formatted_address);
                }} placeholder="Indiquez une adresse, un code postal, une ville" className={"bg-transparent text-brown-50 block w-full pr-10 " + (!errors.shippingAddressFormatted
                    ? "border-brown-50 focus:ring-brown-50 focus:border-brown-50"
                    : "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500") + " disabled:opacity-50"} onBlur={onBlur}/>);
        }}/>
                  {errors.shippingAddressFormatted && (<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500"/>
                    </div>)}
                </div>
                {errors.shippingAddressFormatted && (<p className="mt-4 text-sm text-red-600" id="shippingAddressFormatted-error">
                    {errors.shippingAddressFormatted.message}
                  </p>)}
              </div>
                          <div className="rounded-md -space-y-px">
                              <div className="relative py-4 flex">
                                  <div className="flex items-center h-5">
                                      <input id={"shippingAddressProximity"} {...register("shippingAddressProximity")} type="checkbox" className="bg-gris-800 h-8 w-8 text-gris-800 cursor-pointer border-brown-50 focus:ring-opacity-50 focus:ring-brown-50 checked:border-brown-50" defaultChecked={state.form.shippingAddressProximity} onChange={function (e) {
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
        }}/>
                                  </div>
                                  <label htmlFor={"shippingAddressProximity"} className="ml-8 flex flex-col cursor-pointer">
                                      <span className="block text-xsm text-brown-50 font-bold uppercase">
                                          La proximité de l'atelier est un critère important
                    </span>
                                  </label>
                              </div>
                              {errors.shippingAddressProximity && (<p className="flex mt-4 text-sm text-red-600" id="shippingAddressProximity-error">
                                      <exclamation_circle_icon_1.default className="h-5 w-5 text-red-500 mr-2"/>{" "}
                                      {errors.shippingAddressProximity.message}
                                  </p>)}
                          </div>
            </div>
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
exports.default = QuotationStepShippingLocation;
//# sourceMappingURL=quotation-step-shipping-location.jsx.map
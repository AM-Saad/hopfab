"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const little_state_machine_1 = require("little-state-machine");
const lodash_1 = require("lodash");
const quotationform_1 = require("../../models/quotationform");
const stateMachineActions_1 = require("./stateMachineActions");
const clienttype_1 = require("../../models/clienttype");
const quotation_steps_1 = require("./quotation-steps");
// Import Duet Date Picker
const loader_1 = require("@duetds/date-picker/dist/loader");
require("@duetds/date-picker/dist/duet/themes/dark.css");
// Register Duet Date Picker
loader_1.defineCustomElements(window);
little_state_machine_1.createStore({
    meta: lodash_1.cloneDeep(stateMachineActions_1.INITIAL_META),
    form: lodash_1.cloneDeep(quotationform_1.INITIAL_QUOTATION_FORM),
    data: {
        // Vous êtes
        clientTypes: clienttype_1.CLIENT_TYPE_LABELS,
        // Votre projet concerne un espace
        projectTypologies: [],
        // Prestations recherchées
        services: [],
        // Vous souhaitez
        serviceTypes: [],
        priceRanges: [],
        professions: []
    },
    version: 1,
}, {
    name: "depot-projet-hopfab",
    middleWares: [],
});
const QuotationForm = ({ className }) => {
    return (<little_state_machine_1.StateMachineProvider>
      <quotation_steps_1.default />
    </little_state_machine_1.StateMachineProvider>);
};
exports.default = QuotationForm;

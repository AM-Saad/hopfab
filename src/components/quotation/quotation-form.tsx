import React from "react";
import { StateMachineProvider, createStore } from "little-state-machine";
import { cloneDeep } from "lodash";

import { INITIAL_QUOTATION_FORM } from "../../models/quotationform";
import { INITIAL_META } from "./stateMachineActions";
import { CLIENT_TYPE_LABELS } from "../../models/clienttype";
import QuotationSteps from "./quotation-steps";

// Import Duet Date Picker
import { defineCustomElements } from "@duetds/date-picker/dist/loader";
import "@duetds/date-picker/dist/duet/themes/dark.css";

// Register Duet Date Picker
defineCustomElements(window);

createStore(
  {
    meta: cloneDeep(INITIAL_META),
    form: cloneDeep(INITIAL_QUOTATION_FORM),
    data: {
      // Vous êtes
      clientTypes: CLIENT_TYPE_LABELS,
      // Votre projet concerne un espace
      projectTypologies: [],
      // Prestations recherchées
      services: [],
      // Vous souhaitez
      serviceTypes: [],
      priceRanges: [],
      professions:[]
    },
    version: 1,
  },
  {
    name: "depot-projet-hopfab",
    middleWares: [],
  }
);

type DataProps = {
  className?: string;
};

const QuotationForm: React.FC<DataProps> = ({ className }) => {
  return (
    <StateMachineProvider>
      <QuotationSteps />
    </StateMachineProvider>
  );
};

export default QuotationForm;

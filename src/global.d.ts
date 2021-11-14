import { QuotationForm } from "./models/quotationform";
import { SelectItem } from "./models/selectitem";
import { SelectItemWithDescription } from "./models/selectitemwithdescription";

declare module "little-state-machine" {
  interface GlobalState {
    meta: {
      currentStep: number;
      totalSteps: number;
      isFinished: boolean;
    };
    form: QuotationForm;
    data: {
      clientTypes: SelectItem[];
      projectTypologies: SelectItem[];
      services: SelectItem[];
      serviceTypes: SelectItemWithDescription[];
      priceRanges: SelectItem[];
      professions: SelectItem[]
    };
    version: number;
  }
}

import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "duet-date-picker": DuetDatePickerProps;
    }
  }
}

interface DuetDatePickerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDuetDatePickerElement>,
    HTMLDuetDatePickerElement
  > {}

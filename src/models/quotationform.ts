import { FilePondInitialFile } from "filepond";

export interface QuotationForm {
  professionId: string | null;
  materialsIds: string[];
  clientType: string | null;
  projectTypologyId: string | null;
  serviceTypeId: string | null;
  attachments: FilePondInitialFile[];
  documentsTypes:string[];
  servicesIds: string[]; // Prestations
  creatorConsultationLimit :number| null;
  badgesIds: string[]; // Prestations
  spendinglimit: number | null;
  spendinglimitDontKnow: boolean;
  priceRangeId: string | null;
  quotationDeadlineUrgent: boolean;
  quotationDeadlineDate: string | null;
  shippingDeadlineDate: string | null;
  shippingDeadlineDateEnd: string | null;
  hasNoPreciseTimeLimit : boolean;
  projectName: string | null;
  clientInternalReference: string | null;
  description: string | null;
  shippingAddressFormatted: string | null;
  shippingAddress: {
    streetAddress: string;
    streetAddressBis: string;
    city: string;
    postalCode: string;
    } | null;
    shippingAddressProximity: boolean;
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    entreprise: string;
  };
  cgu: boolean;
}

export const INITIAL_QUOTATION_FORM: QuotationForm = {
  professionId:null,
  materialsIds:[],
  clientType: null,
  projectTypologyId: null,
  serviceTypeId: null,
  creatorConsultationLimit :null,
  attachments: [],
  documentsTypes:[],
  servicesIds: [], // Prestations
  badgesIds: [], // Prestations
  spendinglimit: null,
  spendinglimitDontKnow: false,
  priceRangeId: null,
  quotationDeadlineUrgent: false,
  quotationDeadlineDate: null,
  shippingDeadlineDate: null,
  shippingDeadlineDateEnd: null,
  hasNoPreciseTimeLimit : false,
  projectName: null,
  clientInternalReference: null,
  description: null,
  shippingAddressFormatted: "",
  shippingAddress: null,
  shippingAddressProximity: false,
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    entreprise:"",
  },
  cgu: false,
};
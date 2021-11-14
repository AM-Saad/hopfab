import { GlobalState } from "little-state-machine";
import { cloneDeep } from "lodash";
import { INITIAL_QUOTATION_FORM } from "../../models/quotationform";

export const INITIAL_META = {
  currentStep: 1,
  totalSteps: 12,
  isFinished: false,
};

export const updateMeta = (state: GlobalState, payload) => ({
  ...state,
  meta: {
    ...state.meta,
    ...payload,
  },
});

export const updateForm = (state: GlobalState, payload) => {
  return ({...state, form: {...state.form, ...payload,}, })
}

export const updateData = (state: GlobalState, payload) => ({
  ...state,
  data: {
    ...state.data,
    ...payload,
  },
});

export const updateAttachments = (state: GlobalState, payload) => ({
  ...state,
  form: {
    ...state.form,
    ...{
      attachments: [...payload],
    },
  },
});

export const resetExceptContact = (state: GlobalState) => ({
  ...state,
  meta: cloneDeep(INITIAL_META),
  form: {
    ...cloneDeep(INITIAL_QUOTATION_FORM),
    ...{
      contact: {
        ...state.form.contact,
      },
    },
  },
});

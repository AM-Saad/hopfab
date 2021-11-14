import { BaseReferentiel } from "./baseReferentiel";

export interface Service extends BaseReferentiel {
  parentId: string;
}

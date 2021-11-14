export interface BaseReferentiel {
  id: string;
  name: string;
  humanName: string;
  isPublished: boolean;
  version: number;
  created: Date;
  createdBy: string;
  lastModified: Date;
  lastModifiedBy: string;
}

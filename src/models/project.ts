export interface Project {
  id: string;
  idProjet?: string;
  fullPath: string;
  typeDeProjet: string;
  titre: string;
  titreDescriptif: string;
  metaDescription?: string;
  description?: string;
  artisans: string | null;
  metiers: string | null;
  architecte: string | null;
  client: string | null;
  departement: string | null;
  materiaux: string | null;
  prestationsPrincipales: string;
  prestations?: string;
  temoignage: string | null;
  temoignageAuteur: string | null;
  temoignageFonctionAuteur: string | null;
  creditPhoto: string | null;
  photo1Image: any | null;
  photo1Description: string;
  photo2Image: any | null;
  photo2Description: string | null;
  photo3Image: any | null;
  photo3Description: string | null;
  photo4Image: any | null;
  photo4Description: string | null;
  photo5Image: any | null;
  photo5Description: string | null;
  photo6Image: any | null;
  photo6Description: string | null;
  photo7Image: any | null;
  photo7Description: string | null;
  photo8Image: any | null;
  photo8Description: string | null;
  photo9Image: any | null;
  photo9Description: string | null;
  photo10Image: any | null;
  photo10Description: string | null;
}
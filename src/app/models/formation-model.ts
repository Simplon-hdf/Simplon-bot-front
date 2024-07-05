export interface FormationModel {
  id: number;
  name: string;
  place: string;
  status: 'en cours' | 'terminé';
  type: 'dev inté' | 'dev front' | 'dev c#';
  former_1: PersonModel;
  former_2: PersonModel;
  caps: PersonModel;
  start_date: string;
  end_date: string;
  charge_admin: PersonModel;
  responsable_campus: PersonModel;
  responsable_pedagogique: PersonModel;
}

export interface PersonModel {
  id: number;
  name: string;
  profilePictureUrl: string;
}

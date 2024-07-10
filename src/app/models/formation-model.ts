export interface FormationModel {
  id: number;
  name: string;
  place: string;
  status: string;
  type: string;
  former_1: PersonModel;
  former_2: PersonModel;
  caps: PersonModel;
  start_date: string;
  end_date: string;
  charge_admin: PersonModel;
  responsable_campus: PersonModel;
  responsable_pedagogique: PersonModel;
  learners: LearnerModel[];
}

export interface LearnerModel {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
}

export interface PersonModel {
  id: number;
  name: string;
  profilePictureUrl: string;
}

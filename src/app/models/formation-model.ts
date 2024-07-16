// export interface FormationModel {
//   id: number;
//   name: string;
//   place: string;
//   status: string;
//   type: string;
//   former_1: PersonModel;
//   former_2: PersonModel;
//   caps: PersonModel;
//   start_date: string;
//   end_date: string;
//   charge_admin: PersonModel;
//   responsable_campus: PersonModel;
//   responsable_pedagogique: PersonModel;
//   learners: LearnerModel[];
// }

export interface BasicInfo {
  name: string;
  start_date: string;
  end_date: string;
  type: string;
  place: string;
  status: string;
  learners: LearnerModel[];
}

export interface Staffs {
  caps: PersonModel;
  former_1: PersonModel;
  former_2: PersonModel;
  charge_admin: PersonModel;
  responsable_campus: PersonModel;
  responsable_pedagogique: PersonModel;
}

export interface FormationModel {
  id: number;
  basicInfo: BasicInfo;
  staffs: Staffs;
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

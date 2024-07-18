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
  cdp: PersonModel;
  former_1: PersonModel;
  former_2: PersonModel;
  admin_head: PersonModel;
  campus_manager: PersonModel;
  pedagogical_manager: PersonModel;
}

export interface PromoModel {
  id: number;
  basicInfo: BasicInfo;
  staffs: Staffs;
}

export interface LearnerModel {
  id: number;
  name: string;
  phone_number: string;
  email: string;
}

export interface PersonModel {
  id: number;
  name: string;
  profile_picture_url: string;
}

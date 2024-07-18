import { BasicInfo } from './basic-info-model';
import { Staffs } from './staffs-model';

export interface PromoModel {
  id: number;
  basicInfo: BasicInfo;
  staffs: Staffs;
}

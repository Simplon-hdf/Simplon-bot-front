import { BasicInfo } from './IBasicInfo';
import { IStaff } from './IStaff';

export interface IPromo {
  id: number;
  basicInfo: BasicInfo;
  staffs: IStaff;
}

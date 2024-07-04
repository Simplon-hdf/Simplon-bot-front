export interface FormationModel {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  place: string;
  caps: string;
  status: 'en cours' | 'terminé';
}

import { Monthes } from '../Enums/Enums';

export class LearnerChartConfig {
  private static _data: any = {
    //Getting values on ENUM without filter returns both the keys and default number values. Filter() is required to use only the keys of the enum
    labels: Object.values(Monthes).filter((value) => isNaN(Number(value))),
    datasets: [
      {
        label: 'Apprenants par mois',
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
        fill: true,
        borderColor: '#ce0033',
        backgroundColor: '#CE003326',
        tension: 0.1,
      },
    ],
  };
  private static _options: any = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  //#region ACCESSORS
  public static get data(): any {
    return LearnerChartConfig._data;
  }

  public static get config(): any {
    return LearnerChartConfig._config;
  }

  public static get options(): any {
    return LearnerChartConfig._options;
  }
  //#endregion

  private static _config: any = {
    type: 'line',
    data: this.data,
    options: this.options,
  };
}

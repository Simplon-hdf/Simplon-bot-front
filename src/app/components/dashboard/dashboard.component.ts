import { Component } from '@angular/core';
import { DashboardGraphComponent } from './dashboard-blocks/dashboard-graph/dashboard-graph/dashboard-graph.component';
import { Chart, registerables } from 'chart.js';
import { DashboardWheelComponent } from './dashboard-blocks/dashboard-wheel/dashboard-wheel.component';
import { Monthes } from '../../Enums/Enums';
import { LearnerChartConfig } from '../../Helpers/LearnerChartConfig';
import { PromosChartConfig } from '../../Helpers/PromosChartConfig';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardGraphComponent, DashboardWheelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  //Getting values on ENUM without filter returns both the keys and default number values. Filter() is required to use only the keys of the enum
  private _MONTHES = Object.values(Monthes).filter((value) =>
    isNaN(Number(value))
  );

  public get MONTHES() {
    return this._MONTHES;
  }

  //#region charts config
  promosChartConfig: any = PromosChartConfig.config;

  apprenantsChartConfig: any = LearnerChartConfig.config;

  promosChart: any;
  apprenantsChart: any;

  //#endregion

  ngOnInit(): void {
    this.promosChart = new Chart('promosChart', this.promosChartConfig);

    this.apprenantsChart = new Chart(
      'apprenantsChart',
      this.apprenantsChartConfig
    );
  }
}

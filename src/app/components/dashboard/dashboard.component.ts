import { Component } from '@angular/core';
import { DashboardGraphComponent } from './dashboard-blocks/dashboard-graph/dashboard-graph/dashboard-graph.component';
import { Chart, registerables } from 'chart.js';
import { DashboardWheelComponent } from './dashboard-blocks/dashboard-wheel/dashboard-wheel.component';
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
  private _promosChartConfig: any = PromosChartConfig.config;

  private _apprenantsChartConfig: any = LearnerChartConfig.config;

  promosChart: any;
  apprenantsChart: any;

  //#region ACCESSORS
  public get promosChartConfig(): any {
    return this._promosChartConfig;
  }

  public get apprenantsChartConfig(): any {
    return this._apprenantsChartConfig;
  }

  //#endregion

  ngOnInit(): void {
    this.promosChart = new Chart('promosChart', this.promosChartConfig);

    this.apprenantsChart = new Chart(
      'apprenantsChart',
      this.apprenantsChartConfig
    );
  }
}

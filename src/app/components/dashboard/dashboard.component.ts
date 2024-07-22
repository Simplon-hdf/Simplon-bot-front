/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
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
export class DashboardComponent implements OnInit {
  /**
   * See {@link PromosChartConfig}
   */
  private _promosChartConfig: any = PromosChartConfig.config;

  /**
   * See {@link LearnerChartConfig}
   */
  private _apprenantsChartConfig: any = LearnerChartConfig.config;

  private _promosChart: any;

  private _apprenantsChart: any;

  //#region ACCESSORS
  public get promosChartConfig(): any {
    return this._promosChartConfig;
  }

  public get apprenantsChartConfig(): any {
    return this._apprenantsChartConfig;
  }

  public get promosChart(): any {
    return this._promosChart;
  }

  public set promosChart(value: any) {
    this._promosChart = value;
  }

  public get apprenantsChart(): any {
    return this._apprenantsChart;
  }

  public set apprenantsChart(value: any) {
    this._apprenantsChart = value;
  }

  //#endregion

  ngOnInit() {
    /**
     * - First argument is the canva's id where the chart is rendered
     * - Second argument is the chart's configuration
     */
    this.promosChart = new Chart('promosChart', this.promosChartConfig);
    this.apprenantsChart = new Chart(
      'apprenantsChart',
      this.apprenantsChartConfig
    );
  }
}

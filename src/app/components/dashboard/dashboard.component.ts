import { Component } from '@angular/core';
import { DashboardGraphComponent } from './dashboard-blocks/dashboard-graph/dashboard-graph/dashboard-graph.component';
import { Chart, registerables } from 'chart.js';
import { DashboardWheelComponent } from './dashboard-blocks/dashboard-wheel/dashboard-wheel.component';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardGraphComponent, DashboardWheelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  //#region charts config
  formationsChartConfig: any = {
    type: 'bar',
    data: {
      labels: this.months,
      datasets: [
        {
          label: 'Formations active par mois',
          data: ['3', '12', '7', '9', '16', '3', '8', '10', '2', '8', '1', '3'],
          backgroundColor: '#CE003380',
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  apprenantsChartConfig: any = {
    type: 'line',
    data: {
      labels: this.months,
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
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  formationsChart: any;
  apprenantsChart: any;

  //#endregion

  ngOnInit(): void {
    this.formationsChart = new Chart(
      'formationsChart',
      this.formationsChartConfig
    );

    this.apprenantsChart = new Chart(
      'apprenantsChart',
      this.apprenantsChartConfig
    );
  }
}

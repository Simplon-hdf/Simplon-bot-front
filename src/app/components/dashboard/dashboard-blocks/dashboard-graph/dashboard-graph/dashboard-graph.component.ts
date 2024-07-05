import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-graph',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-graph.component.html',
  styleUrl: './dashboard-graph.component.scss',
})
export class DashboardGraphComponent {
  // TODO : add integration with real data from DB
  //Data refers formations, apprenants...
  ongoingData = 24;
  totalData = 145;
}

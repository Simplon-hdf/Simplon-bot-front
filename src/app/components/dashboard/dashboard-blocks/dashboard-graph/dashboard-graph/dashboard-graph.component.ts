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

  /**
   * Current amount of promos or learners at the time
   */
  private _currentData = 24;

  /**
   * Total amount of promos or learners at the time
   */
  private _totalData = 145;

  //#region ACCESSORS
  public get currentData() {
    return this._currentData;
  }

  public set currentData(value) {
    this._currentData = value;
  }

  public get totalData() {
    return this._totalData;
  }

  public set totalData(value) {
    this._totalData = value;
  }
  //#endregion
}

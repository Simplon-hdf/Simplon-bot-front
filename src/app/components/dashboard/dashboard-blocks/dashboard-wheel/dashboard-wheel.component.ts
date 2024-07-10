import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-wheel',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-wheel.component.html',
  styleUrl: './dashboard-wheel.component.scss',
})
export class DashboardWheelComponent implements OnInit {
  //TODO : import real data from API

  /**
   *`data` refers to either the number of channels or the number of roles depending on the use of the component
   */
  @Input() maxAmountOfData!: number;

  /**
   *`data` refers to either the number of channels or the number of roles depending on the use of the component
   */
  @Input()
  _currentData!: number;

  get currentData() {
    return this._currentData;
  }
  set currentData(value: number) {
    this._currentData = value;
    this.cssVariable = `--percentage: ${(this._currentData * 100) / this.maxAmountOfData}`;
  }

  /**
   *`data` refers to either the number of channels or the number of roles depending on the use of the component
   */
  cssVariable!: string;

  //cssVariable needs _currentData and maxAmountOfData; as Inputs, they receive data in ngOnInit. So cssVariable needs to be calculated in ngOnInit as well
  ngOnInit() {
    this.cssVariable = `--percentage: ${(this._currentData * 100) / this.maxAmountOfData}`;
  }
}

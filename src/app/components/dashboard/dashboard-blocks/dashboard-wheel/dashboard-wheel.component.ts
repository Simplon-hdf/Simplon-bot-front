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
   *`data` refers to either the number of channe or the number of role depending on the use of the component
   */
  @Input() maxAmountOfData!: number;

  /**
   *`data` refers to either the number of channe or the number of role depending on the use of the component
   */
  @Input()
  _amountOfData!: number;

  get amountOfData() {
    return this._amountOfData;
  }
  set amountOfData(value: number) {
    this._amountOfData = value;
    this.dataPercentage = `--percentage: ${(this._amountOfData * 100) / this.maxAmountOfData}`;
  }

  /**
   *`data` refers to either the number of channe or the number of role depending on the use of the component
   */
  dataPercentage!: string;
  dataPercentageToNumber!: number;

  ngOnInit() {
    this.dataPercentage = `--percentage: ${(this._amountOfData * 100) / this.maxAmountOfData}`;
    this.dataPercentageToNumber = Number(this.dataPercentage.match(/\d+/));
  }
}

import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MapperService } from '../../../services/mapper.service';
import { ILearner } from '../../../Interfaces/ILearner';
import { ICsv } from '../../../Interfaces/ICsv';
import { parse } from 'csv-parse/browser/esm/sync';

@Component({
  selector: 'app-add-learners-popup-menu',
  standalone: true,
  imports: [],
  templateUrl: './add-learners-popup-menu.component.html',
  styleUrl: './add-learners-popup-menu.component.scss',
})
export class AddLearnersPopupMenuComponent {
  /**
   * Map Csv files that match the `ICsv` interface to `ILearner` interface
   */
  private _mapper: MapperService = inject(MapperService);

  /**
   * An array of `ILearner`
   * @DefaultValue an empty array
   */
  private _learners: ILearner[] = [];

  /**
   * Event is fired when the input type file receives an Csv file
   */
  @Output() addCsvFile = new EventEmitter<ILearner[]>();

  /**
   * Event is fired when the `addButton` is clicked
   */
  @Output() addButtonClick = new EventEmitter<void>();

  //#region ACCESSORS
  public get learners(): ILearner[] {
    return this._learners;
  }

  public set learners(value: ILearner[]) {
    this._learners = value;
  }
  //#endregion

  /**
   * Read and map the content of a Csv file to `this.learners`
   * Emit an event with addCsvFile with `this.learners` as an argument
   * @param uploadedFile the file receive from the form. It matches `ICsv` interface
   */
  public changeListener(uploadedFile: any): void {
    const file: File = uploadedFile.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        const csv: string = reader.result as string;
        const records: ICsv[] = parse(csv, {
          columns: true,
          skip_empty_lines: true,
        });
        this.learners = this._mapper.csvToLearner(records);
        this.addCsvFile.emit(this.learners);
      };
    }
  }

  /**
   * Emit an event with `addButtonClick`
   * @returns void
   */
  public onAddClick(): void {
    this.addButtonClick.emit();
  }
}

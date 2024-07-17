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
  private _mapper: MapperService = inject(MapperService);
  private _learners: ILearner[] = [
    // {
    //   id: undefined,
    //   firstName: 'jean',
    //   lastName: 'pierre',
    //   mail: 'pierre@mail.com',
    //   phoneNumber: '06 01 02 03 04',
    //   formationId: undefined,
    // },
  ];
  @Output() addCsvFile = new EventEmitter<ILearner[]>();
  @Output() addButtonClickEmitter = new EventEmitter<void>();

  //#region ACCESSORS
  public get learners(): ILearner[] {
    return this._learners;
  }

  public set learners(value: ILearner[]) {
    this._learners = value;
  }
  //#endregion

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

  public onAddClick() {
    this.addButtonClickEmitter.emit();
  }
}

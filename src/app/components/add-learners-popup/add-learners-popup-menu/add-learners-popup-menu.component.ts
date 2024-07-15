import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MapperService } from '../../../services/mapper.service';
import { LearnerModel } from '../../../models/learner-model';
import { CsvModel } from '../../../models/csv-model';
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
  private _learners: LearnerModel[] = [
    // {
    //   id: undefined,
    //   firstName: 'jean',
    //   lastName: 'pierre',
    //   mail: 'pierre@mail.com',
    //   phoneNumber: '06 01 02 03 04',
    //   formationId: undefined,
    // },
  ];
  @Output() addCsvFile = new EventEmitter<LearnerModel[]>();
  @Output() addButtonClickEmitter = new EventEmitter<void>();

  //#region ACCESSORS
  public get learners(): LearnerModel[] {
    return this._learners;
  }

  public set learners(value: LearnerModel[]) {
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
        const records: CsvModel[] = parse(csv, {
          columns: true,
          skip_empty_lines: true,
        });
        this.learners = this._mapper.csvToLearner(records);
        this.addCsvFile.emit(this.learners);
        console.log(this.learners);
      };
    }
  }

  public onAddClick() {
    this.addButtonClickEmitter.emit();
  }
}

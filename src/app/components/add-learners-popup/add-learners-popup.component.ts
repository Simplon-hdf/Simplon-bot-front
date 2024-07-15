import { Component, EventEmitter, inject, Output } from '@angular/core';
import { parse } from '../../../../node_modules/csv-parse/dist/esm/sync';
import { LearnerModel } from '../../models/learner-model';
import { CsvModel } from '../../models/csv-model';
import { MapperService } from '../../services/mapper.service';

@Component({
  selector: 'app-add-learners-popup',
  standalone: true,
  imports: [],
  providers: [MapperService],
  templateUrl: './add-learners-popup.component.html',
  styleUrl: './add-learners-popup.component.scss',
})
export class AddLearnersPopupComponent {
  private mapper: MapperService = inject(MapperService);
  private _learners: LearnerModel[] | undefined = undefined;
  private _isAddingLearners = false;
  @Output() closePopup = new EventEmitter<void>();

  //#region getters setter
  public get isAddingLearners() {
    return this._isAddingLearners;
  }

  public set isAddingLearners(value) {
    this._isAddingLearners = value;
  }

  public get learners(): LearnerModel[] | undefined {
    return this._learners;
  }

  public set learners(value: LearnerModel[] | undefined) {
    this._learners = value;
  }
  //#endregion

  onClosePopupClick() {
    this.closePopup.emit();
  }

  changeListener(uploadedFile: any): void {
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
        this.learners = this.mapper.csvToLearner(records);
      };
    }
  }

  onAddingLearner() {
    this.isAddingLearners = true;
  }
}

import { Component, EventEmitter, inject, Output } from '@angular/core';
import { parse } from '../../../../node_modules/csv-parse/dist/esm/sync';
import { LearnerModel } from '../../models/learner-model';
import { CsvModel } from '../../models/csv-model';
import { MapperService } from '../../services/mapper.service';
import { AddLearnersPopupFormComponent } from './add-learners-popup-form/add-learners-popup-form/add-learners-popup-form.component';

@Component({
  selector: 'app-add-learners-popup',
  standalone: true,
  imports: [AddLearnersPopupFormComponent],
  providers: [MapperService],
  templateUrl: './add-learners-popup.component.html',
  styleUrl: './add-learners-popup.component.scss',
})
export class AddLearnersPopupComponent {
  private mapper: MapperService = inject(MapperService);
  private _learners: LearnerModel[] = [];
  private _isAddingLearners = false;
  @Output() closePopup = new EventEmitter<void>();

  //#region getters setter
  public get isAddingLearners() {
    return this._isAddingLearners;
  }

  public set isAddingLearners(value) {
    this._isAddingLearners = value;
  }

  public get learners(): LearnerModel[] {
    return this._learners;
  }

  public set learners(value: LearnerModel[]) {
    this._learners = value;
  }
  //#endregion

  public onClosePopupClick() {
    this.closePopup.emit();
  }

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
        this.learners = this.mapper.csvToLearner(records);
      };
    }
  }

  public onAddingLearners() {
    this.isAddingLearners = true;
  }

  public addLearner(learner: LearnerModel) {
    console.log(learner);
    console.log(this.learners);
    this.isAddingLearners = false;
    this.learners?.push(learner);
  }
}

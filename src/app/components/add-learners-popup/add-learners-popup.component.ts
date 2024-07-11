import { Component, EventEmitter, Output } from '@angular/core';
import { parse } from '../../../../node_modules/csv-parse/dist/esm/sync';
import { LearnerModel } from '../../models/learner-model';

@Component({
  selector: 'app-add-learners-popup',
  standalone: true,
  imports: [],
  templateUrl: './add-learners-popup.component.html',
  styleUrl: './add-learners-popup.component.scss',
})
export class AddLearnersPopupComponent {
  @Output() closePopup = new EventEmitter<void>();
  learners: LearnerModel[] | null = null;

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
        console.log('le csv :' + csv);
        const records: LearnerModel[] = parse(csv, {
          columns: true,
          skip_empty_lines: true,
        });
        // for (const record of records) {
        //   console.log(record);
        // }
        this.learners = records;
      };
    }
  }
}

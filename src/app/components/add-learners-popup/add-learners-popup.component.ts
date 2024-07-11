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
  mapper: MapperService = inject(MapperService);
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
        const records: CsvModel[] = parse(csv, {
          columns: true,
          skip_empty_lines: true,
        });
        this.learners = this.mapper.CsvToLearner(records);
      };
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLearnerPopupComponent } from './edit-learner-popup.component';

describe('EditLearnerPopupComponent', () => {
  let component: EditLearnerPopupComponent;
  let fixture: ComponentFixture<EditLearnerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLearnerPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLearnerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

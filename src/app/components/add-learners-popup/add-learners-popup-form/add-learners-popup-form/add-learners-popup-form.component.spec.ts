import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLearnersPopupFormComponent } from './add-learners-popup-form.component';

describe('AddLearnersPopupFormComponent', () => {
  let component: AddLearnersPopupFormComponent;
  let fixture: ComponentFixture<AddLearnersPopupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLearnersPopupFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLearnersPopupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

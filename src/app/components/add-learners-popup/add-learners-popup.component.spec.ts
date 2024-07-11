import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLearnersPopupComponent } from './add-learners-popup.component';

describe('AddLearnersPopupComponent', () => {
  let component: AddLearnersPopupComponent;
  let fixture: ComponentFixture<AddLearnersPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLearnersPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddLearnersPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

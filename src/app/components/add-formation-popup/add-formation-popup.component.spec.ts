import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormationPopupComponent } from './add-formation-popup.component';

describe('AddFormationPopupComponent', () => {
  let component: AddFormationPopupComponent;
  let fixture: ComponentFixture<AddFormationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFormationPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

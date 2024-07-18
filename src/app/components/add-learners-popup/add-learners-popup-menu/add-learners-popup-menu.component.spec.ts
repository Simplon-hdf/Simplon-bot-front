import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLearnersPopupMenuComponent } from './add-learners-popup-menu.component';

describe('AddLearnersPopupMenuComponent', () => {
  let component: AddLearnersPopupMenuComponent;
  let fixture: ComponentFixture<AddLearnersPopupMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLearnersPopupMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLearnersPopupMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

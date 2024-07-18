import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromoPopupComponent } from './add-promo-popup.component';

describe('AddPromoPopupComponent', () => {
  let component: AddPromoPopupComponent;
  let fixture: ComponentFixture<AddPromoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPromoPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPromoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

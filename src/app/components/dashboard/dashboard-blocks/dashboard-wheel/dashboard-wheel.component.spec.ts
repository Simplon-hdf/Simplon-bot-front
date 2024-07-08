import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWheelComponent } from './dashboard-wheel.component';

describe('DashboardWheelComponent', () => {
  let component: DashboardWheelComponent;
  let fixture: ComponentFixture<DashboardWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWheelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

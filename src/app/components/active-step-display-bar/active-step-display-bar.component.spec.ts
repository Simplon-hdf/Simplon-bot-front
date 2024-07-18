import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStepDisplayBarComponent } from './active-step-display-bar.component';

describe('ActiveStepDisplayBarComponent', () => {
  let component: ActiveStepDisplayBarComponent;
  let fixture: ComponentFixture<ActiveStepDisplayBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveStepDisplayBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveStepDisplayBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

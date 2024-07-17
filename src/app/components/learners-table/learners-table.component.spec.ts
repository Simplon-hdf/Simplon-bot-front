import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnersTableComponent } from './learners-table.component';

describe('LearnersTableComponent', () => {
  let component: LearnersTableComponent;
  let fixture: ComponentFixture<LearnersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnersTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

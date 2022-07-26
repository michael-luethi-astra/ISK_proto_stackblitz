import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingAndRestingTimeComponent } from './working-and-resting-time.component';

describe('WorkingAndRestingTimeComponent', () => {
  let component: WorkingAndRestingTimeComponent;
  let fixture: ComponentFixture<WorkingAndRestingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingAndRestingTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingAndRestingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

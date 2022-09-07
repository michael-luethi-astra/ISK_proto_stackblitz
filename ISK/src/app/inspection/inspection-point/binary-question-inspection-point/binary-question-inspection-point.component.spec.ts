import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryQuestionInspectionPointComponent } from './binary-question-inspection-point.component';

describe('BinaryQuestionInspectionPointComponent', () => {
  let component: BinaryQuestionInspectionPointComponent;
  let fixture: ComponentFixture<BinaryQuestionInspectionPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryQuestionInspectionPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaryQuestionInspectionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

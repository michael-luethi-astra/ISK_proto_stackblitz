import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalQuestionaryInfringementClassificationComponent } from './hierarchical-questionary-infringement-classification.component';

describe('HierarchicalQuestionaryInfringementClassificationComponent', () => {
  let component: HierarchicalQuestionaryInfringementClassificationComponent;
  let fixture: ComponentFixture<HierarchicalQuestionaryInfringementClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchicalQuestionaryInfringementClassificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchicalQuestionaryInfringementClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

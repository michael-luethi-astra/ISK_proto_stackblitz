import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaryHierarchicalInfringementComponent } from './questionary-hierarchical-infringement.component';

describe('QuestionaryHierarchicalInfringementComponent', () => {
  let component: QuestionaryHierarchicalInfringementComponent;
  let fixture: ComponentFixture<QuestionaryHierarchicalInfringementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionaryHierarchicalInfringementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionaryHierarchicalInfringementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

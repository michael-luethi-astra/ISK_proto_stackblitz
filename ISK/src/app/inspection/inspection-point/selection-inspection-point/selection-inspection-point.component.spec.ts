import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionInspectionPointComponent } from './selection-inspection-point.component';

describe('SelectionInspectionPointComponent', () => {
  let component: SelectionInspectionPointComponent;
  let fixture: ComponentFixture<SelectionInspectionPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionInspectionPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionInspectionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

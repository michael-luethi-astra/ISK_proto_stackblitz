import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInspectionPointComponent } from './number-inspection-point.component';

describe('NumberInspectionPointComponent', () => {
  let component: NumberInspectionPointComponent;
  let fixture: ComponentFixture<NumberInspectionPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInspectionPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberInspectionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

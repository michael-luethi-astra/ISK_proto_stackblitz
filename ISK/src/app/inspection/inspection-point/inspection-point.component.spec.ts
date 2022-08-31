import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionPointComponent } from './inspection-point.component';

describe('InspectionPointComponent', () => {
  let component: InspectionPointComponent;
  let fixture: ComponentFixture<InspectionPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectionPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

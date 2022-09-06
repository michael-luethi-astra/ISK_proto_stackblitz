import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultInspectionPointComponent } from './default-inspection-point.component';

describe('DefaultInspectionPointComponent', () => {
  let component: DefaultInspectionPointComponent;
  let fixture: ComponentFixture<DefaultInspectionPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultInspectionPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultInspectionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

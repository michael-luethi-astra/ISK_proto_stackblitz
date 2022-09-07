import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeInspectionPointComponent } from './notice-inspection-point.component';

describe('NoticeInspectionPointComponent', () => {
  let component: NoticeInspectionPointComponent;
  let fixture: ComponentFixture<NoticeInspectionPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeInspectionPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeInspectionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

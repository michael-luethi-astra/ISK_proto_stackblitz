import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfringementWithoutObvComponent } from './infringement-without-obv.component';

describe('InfringementWithoutObvComponent', () => {
  let component: InfringementWithoutObvComponent;
  let fixture: ComponentFixture<InfringementWithoutObvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfringementWithoutObvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfringementWithoutObvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

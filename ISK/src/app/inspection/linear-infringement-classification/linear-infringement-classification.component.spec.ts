import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LinearInfringementClassificationComponent} from './linear-infringement-classification.component';

describe('LinearInfringementClassificationComponent', () => {
	let component: LinearInfringementClassificationComponent;
	let fixture: ComponentFixture<LinearInfringementClassificationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LinearInfringementClassificationComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(LinearInfringementClassificationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

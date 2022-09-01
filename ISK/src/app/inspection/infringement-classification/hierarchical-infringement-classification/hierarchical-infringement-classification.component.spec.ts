import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HierarchicalInfringementClassificationComponent} from './hierarchical-infringement-classification.component';

describe('HierarchicalInfringementClassificationComponent', () => {
	let component: HierarchicalInfringementClassificationComponent;
	let fixture: ComponentFixture<HierarchicalInfringementClassificationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HierarchicalInfringementClassificationComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(HierarchicalInfringementClassificationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

import {InfringementClassification} from './../infringement-classification';
import {Component, Input, OnInit} from '@angular/core';
import {FormGroupDirective} from '@angular/forms';
import {NGXLogger} from 'ngx-logger';
import {InspectionPoint} from 'src/app/lib/inspection-point';

@Component({
	selector: 'app-hierarchical-infringement-classification',
	templateUrl: './hierarchical-infringement-classification.component.html',
	styleUrls: ['./hierarchical-infringement-classification.component.scss']
})
export class HierarchicalInfringementClassificationComponent extends InfringementClassification implements OnInit {
	@Input() inspectionPoint?: InspectionPoint;

	constructor(rootFormGroup: FormGroupDirective, private readonly logger: NGXLogger) {
		super(rootFormGroup);
	}

	ngOnInit(): void {
		this.initForm();
		this.initInspectionPointConfig(this.inspectionPoint);
		this.initChangeDetection();
	}
}
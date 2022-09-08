import {HierarchicalInfringement} from './../../../lib/hierarchical-infringement';
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
	hierarchicalInfringementsConfig!: HierarchicalInfringement;
	selection: boolean[][];

	constructor(rootFormGroup: FormGroupDirective, private readonly logger: NGXLogger) {
		super(rootFormGroup);
		this.selection = [[false, false, false]];
	}

	ngOnInit(): void {
		this.logger.trace(`ngInit hierarchical ${this.inspectionPoint?.name}`);
		this.initForm();
		this.initInspectionPointConfig(this.inspectionPoint);

		if (this.inspectionPointConfig.hierarchicalInfringementTreeRoot === undefined) {
			throw new Error('');
		}

		this.hierarchicalInfringementsConfig = this.inspectionPointConfig.hierarchicalInfringementTreeRoot;

		this.initChangeDetection();
	}

	override addInfringement() {
		super.addInfringement();
	}
}

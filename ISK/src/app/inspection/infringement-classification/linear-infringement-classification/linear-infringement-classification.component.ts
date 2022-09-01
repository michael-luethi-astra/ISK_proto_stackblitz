import {NGXLogger} from 'ngx-logger';
import {Component, Input, OnInit} from '@angular/core';
import {FormGroupDirective} from '@angular/forms';
import {Infringement} from 'src/app/lib/infringement';
import {InspectionPoint} from 'src/app/lib/inspection-point';
import {InfringementClassification} from '../infringement-classification';

@Component({
	selector: 'app-linear-infringement-classification',
	templateUrl: './linear-infringement-classification.component.html',
	styleUrls: ['./linear-infringement-classification.component.scss']
})
export class LinearInfringementClassificationComponent extends InfringementClassification implements OnInit {
	@Input() inspectionPoint?: InspectionPoint;
	selection: Infringement[][] = [] as Infringement[][];
	linearInfringementsConfig!: Infringement[];

	constructor(rootFormGroup: FormGroupDirective, private readonly logger: NGXLogger) {
		super(rootFormGroup);
	}

	ngOnInit(): void {
		this.initForm();
		this.initInspectionPointConfig(this.inspectionPoint);

		if (this.inspectionPointConfig.linearInfringements === undefined) {
			throw new Error('');
		}

		this.linearInfringementsConfig = this.inspectionPointConfig.linearInfringements;

		this.initChangeDetection();
	}

	get infringementClassGroups() {
		const infringementsClasses = this.inspectionPointConfig.linearInfringements ?? [];
		const groupCodes = infringementsClasses.map(i => i.exclusionGroup ?? NaN);
		const groups = [] as number[];

		groupCodes.forEach(gc => {
			if (!groups.includes(gc)) {
				groups.push(gc);
			}
		});

		return groups;
	}

	get selected() {
		const retval = [] as string[];
		for (let i = 0; i < this.infringements.length; i++) {
			retval.push(this.infringements.at(i).value);
		}

		return retval;
	}

	get selectedGroups() {
		return this.selected.map(v => this.linearInfringementsConfig.find(i => i.value === v)?.exclusionGroup);
	}

	get canAddSecondInfringementClassification() {
		return this.hasInfrignementGrouping && this.selectedGroups.length < this.infringementClassGroups.length;
	}

	get hasInfrignementGrouping() {
		return this.infringementClassGroups.length > 1;
	}

	override addInfringement() {
		super.addInfringement();
		this.selection.push(
			this.hasInfrignementGrouping
				? this.linearInfringementsConfig.filter(i => !this.selectedGroups.includes(i.exclusionGroup))
				: this.linearInfringementsConfig
		);
	}

	override clearInfringements() {
		super.clearInfringements();
		this.selection = [];
	}
}

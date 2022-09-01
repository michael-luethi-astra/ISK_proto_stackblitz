import {NGXLogger} from 'ngx-logger';
import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormGroupDirective} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {Infringement} from 'src/app/lib/infringement';
import {InspectionPoint} from 'src/app/lib/inspection-point';

@Component({
	selector: 'app-linear-infringement-classification',
	templateUrl: './linear-infringement-classification.component.html',
	styleUrls: ['./linear-infringement-classification.component.scss']
})
export class LinearInfringementClassificationComponent implements OnInit {
	@Input() inspectionPoint!: InspectionPoint;
	form!: FormGroup;
	selection: Infringement[][] = [] as Infringement[][];
	private readonly destroy$: Subject<boolean> = new Subject<boolean>();

	constructor(private readonly rootFormGroup: FormGroupDirective, private readonly logger: NGXLogger) {}

	ngOnInit(): void {
		this.form = this.rootFormGroup.control;

		if (this.infringements !== null) {
			this.form
				.get(this.inspectionPoint.name)
				?.valueChanges.pipe(takeUntil(this.destroy$))
				.subscribe(value => {
					if (value === '2' && this.infringements.length === 0) {
						this.addInfringement();
					} else {
						this.clearInfringements();
					}
				});
		}
	}

	get infringements() {
		return this.form.get(`${this.inspectionPoint.name}Infringements`) as FormArray;
	}

	get infringementClassGroups() {
		const infringementsClasses = this.inspectionPoint.linearInfringements ?? [];
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
		return this.selected.map(v => this.inspectionPoint.linearInfringements!.find(i => i.value === v)?.exclusionGroup);
	}

	get canAddSecondInfringementClassification() {
		return this.hasInfrignementGrouping && this.selectedGroups.length < this.infringementClassGroups.length;
	}

	get hasInfrignementGrouping() {
		return this.infringementClassGroups.length > 1;
	}

	addInfringement() {
		this.infringements.push(new FormControl('0'));
		this.selection.push(
			this.hasInfrignementGrouping
				? this.inspectionPoint.linearInfringements!.filter(i => !this.selectedGroups.includes(i.exclusionGroup))
				: this.inspectionPoint.linearInfringements!
		);
	}

	clearInfringements() {
		this.infringements.clear();
		this.selection = [];
	}
}

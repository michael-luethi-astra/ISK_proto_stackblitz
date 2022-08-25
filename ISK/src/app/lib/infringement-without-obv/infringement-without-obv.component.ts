import {InspectionPoint} from '../../../../../ISK/src/app/lib/inspection-point';
import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormGroupDirective} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {Infringement} from '../../../../../ISK/src/app/lib/infringement';

@Component({
	selector: 'app-infringement-without-obv',
	templateUrl: './infringement-without-obv.component.html',
	styleUrls: ['./infringement-without-obv.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfringementWithoutObvComponent implements OnInit, OnDestroy {
	form!: FormGroup;
	@Input() inspectionPoint!: InspectionPoint;
	destroy$: Subject<boolean> = new Subject<boolean>();
	selection: Infringement[][] = [] as Infringement[][];
	constructor(private readonly rootFormGroup: FormGroupDirective) {}

	ngOnInit(): void {
		this.form = this.rootFormGroup.control.get(`${this.inspectionPoint.name}Group`) as FormGroup;

		if (this.infringements !== null) {
			this.form
				.get(this.inspectionPoint.name)
				?.valueChanges.pipe(takeUntil(this.destroy$))
				.subscribe(value => {
					if (value === '1' && this.infringements.length === 0) {
						this.addInfringement();
					} else {
						this.clearInfringements();
					}
				});
		}
	}

	ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
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

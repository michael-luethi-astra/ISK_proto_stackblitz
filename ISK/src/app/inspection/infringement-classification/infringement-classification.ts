import {SelectionPointValueMap} from './../../lib/selection-point-value-map';
import {FormArray, FormControl, FormGroup, FormGroupDirective} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {InspectionPoint} from 'src/app/lib/inspection-point';

export abstract class InfringementClassification {
	form!: FormGroup;
	inspectionPointConfig!: InspectionPoint;

	private readonly destroy$: Subject<boolean> = new Subject<boolean>();

	constructor(private readonly rootFormGroup: FormGroupDirective) {}

	addInfringement() {
		this.infringements.push(new FormControl('0'));
	}

	clearInfringements() {
		this.infringements.clear();
	}

	protected initForm() {
		this.form = this.rootFormGroup.control;
	}

	protected initInspectionPointConfig(inspectionPoint?: InspectionPoint) {
		if (inspectionPoint === undefined) {
			throw new Error('');
		}

		this.inspectionPointConfig = inspectionPoint;
	}

	protected initChangeDetection() {
		if (this.infringements !== null) {
			this.form
				.get(this.inspectionPointConfig.name)
				?.valueChanges.pipe(takeUntil(this.destroy$))
				.subscribe(value => {
					if (this.hasSelectionPointClassification(value) && this.infringements.length === 0) {
						this.addInfringement();
					} else {
						this.clearInfringements();
					}
				});
		}
	}

	private hasSelectionPointClassification(value: string) {
		return this.selectionPointWithClassificationValues.includes(value);
	}

	get infringements() {
		return this.form.get(`${this.inspectionPointConfig.name}Infringements`) as FormArray;
	}

	get selectionPointWithClassificationValues() {
		return this.inspectionPointConfig.selectionPointWithClassificationSet?.map(sp => SelectionPointValueMap.values[sp]) ?? [];
	}

	get selected() {
		const retval = [];
		for (let i = 0; i < this.infringements.length; i++) {
			retval.push(this.infringements.at(i).value);
		}

		return retval;
	}

	abstract get canAddSecondInfringementClassification(): boolean;
}

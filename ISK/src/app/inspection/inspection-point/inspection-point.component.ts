import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {Subject} from 'rxjs/internal/Subject';
import {InspectionPoint} from 'src/app/lib/inspection-point';
import {SelectionPoints} from 'src/app/lib/selection-points.enum';

@Component({
	selector: 'app-inspection-point',
	templateUrl: './inspection-point.component.html',
	styleUrls: ['./inspection-point.component.scss']
})
export class InspectionPointComponent implements OnInit, OnDestroy {
	form!: FormGroup;
	@Input() inspectionPoint!: InspectionPoint;
	private readonly destroy$: Subject<boolean> = new Subject<boolean>();

	constructor(private readonly rootFormGroup: FormGroupDirective) {}

	ngOnInit(): void {
		this.form = this.rootFormGroup.control.get(`${this.inspectionPoint.name}Group`) as FormGroup;
	}

	ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}

	get selecttionPointSet() {
		return this.inspectionPoint.selectionPointSet!;
	}

	get providesNotCheckedOption() {
		return this.selecttionPointSet.includes(SelectionPoints.NotChecked);
	}

	get providesNotApplicableOption() {
		return this.selecttionPointSet.includes(SelectionPoints.NotApplicable);
	}

	get providesReportOption() {
		return this.selecttionPointSet.includes(SelectionPoints.Report);
	}

	get providesOBVOption() {
		return this.selecttionPointSet.includes(SelectionPoints.OBV);
	}

	get providesCheckedOption() {
		return this.selecttionPointSet.includes(SelectionPoints.Checked);
	}

	get providesLinearInfringementClassification() {
		return this.inspectionPoint.hierarchicalInfringementTreeRoot === undefined;
	}
}

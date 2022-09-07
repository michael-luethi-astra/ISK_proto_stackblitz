import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {InspectionPoint} from 'src/app/lib/inspection-point';
import {InspectionPointUtility} from 'src/app/lib/inspection-point-utility';
import {SelectionPointValueMap} from 'src/app/lib/selection-point-value-map';
import {SelectionPoints} from 'src/app/lib/selection-points.enum';

@Component({
	selector: 'app-default-inspection-point',
	templateUrl: './default-inspection-point.component.html',
	styleUrls: ['./default-inspection-point.component.scss']
})
export class DefaultInspectionPointComponent implements OnInit {
	form!: FormGroup;
	@Input() inspectionPoint!: InspectionPoint;

	constructor(private readonly rootFormGroup: FormGroupDirective) {}

	ngOnInit(): void {
		this.form = this.rootFormGroup.control;
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
		return InspectionPointUtility.providesLinearInfringementClassification(this.inspectionPoint);
	}

	get providesHierarchicalInfringementClassification() {
		return InspectionPointUtility.providesHierarchicalInfringementClassification(this.inspectionPoint);
	}

	get selectionPointValueMap() {
		return SelectionPointValueMap.values;
	}
}

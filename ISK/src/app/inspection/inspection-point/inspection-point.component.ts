import {InspectionPointType} from './../../lib/inspection-point-type.enum';
import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {InspectionPoint} from 'src/app/lib/inspection-point';

@Component({
	selector: 'app-inspection-point',
	templateUrl: './inspection-point.component.html',
	styleUrls: ['./inspection-point.component.scss']
})
export class InspectionPointComponent implements OnInit {
	form!: FormGroup;
	type!: InspectionPointType;
	inspectionPointType = InspectionPointType;

	@Input() inspectionPoint!: InspectionPoint;

	constructor(private readonly rootFormGroup: FormGroupDirective) {}

	ngOnInit(): void {
		this.form = this.rootFormGroup.control.get(`${this.inspectionPoint.name}Group`) as FormGroup;

		if (this.inspectionPoint.type === undefined) {
			throw new Error();
		}

		this.type = this.inspectionPoint.type;
	}
}

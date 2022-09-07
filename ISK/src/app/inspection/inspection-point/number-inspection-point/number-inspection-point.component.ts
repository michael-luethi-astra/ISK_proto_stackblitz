import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {InspectionPoint} from 'src/app/lib/inspection-point';

@Component({
	selector: 'app-number-inspection-point',
	templateUrl: './number-inspection-point.component.html',
	styleUrls: ['./number-inspection-point.component.scss']
})
export class NumberInspectionPointComponent implements OnInit {
	form!: FormGroup;
	@Input() inspectionPoint!: InspectionPoint;

	constructor(private readonly rootFormGroup: FormGroupDirective) {}

	ngOnInit(): void {
		this.form = this.rootFormGroup.control;
	}
}

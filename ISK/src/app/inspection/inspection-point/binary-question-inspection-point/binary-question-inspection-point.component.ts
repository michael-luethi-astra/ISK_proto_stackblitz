import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {InspectionPoint} from 'src/app/lib/inspection-point';

@Component({
	selector: 'app-binary-question-inspection-point',
	templateUrl: './binary-question-inspection-point.component.html',
	styleUrls: ['./binary-question-inspection-point.component.scss']
})
export class BinaryQuestionInspectionPointComponent implements OnInit {
	form!: FormGroup;
	@Input() inspectionPoint!: InspectionPoint;

	constructor(private readonly rootFormGroup: FormGroupDirective) {}

	ngOnInit(): void {
		this.form = this.rootFormGroup.control;
	}
}

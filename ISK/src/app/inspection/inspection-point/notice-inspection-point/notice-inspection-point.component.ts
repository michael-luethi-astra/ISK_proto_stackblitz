import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {InspectionPoint} from 'src/app/lib/inspection-point';

@Component({
	selector: 'app-notice-inspection-point',
	templateUrl: './notice-inspection-point.component.html',
	styleUrls: ['./notice-inspection-point.component.scss']
})
export class NoticeInspectionPointComponent implements OnInit {
	form!: FormGroup;
	@Input() inspectionPoint!: InspectionPoint;

	constructor(private readonly rootFormGroup: FormGroupDirective) {}

	ngOnInit(): void {
		this.form = this.rootFormGroup.control;
	}
}

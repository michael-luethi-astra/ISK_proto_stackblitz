import { InspectionPoint } from 'src/app/lib/inspection-point';
import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
	selector: 'app-infringement-without-obv',
	templateUrl: './infringement-without-obv.component.html',
	styleUrls: ['./infringement-without-obv.component.scss']
})
export class InfringementWithoutObvComponent implements OnInit {
	form!: FormGroup;
	@Input() inspectionPoint!: InspectionPoint;

	constructor(private readonly rootFormGroup: FormGroupDirective) {}

	ngOnInit(): void {
		this.form = this.rootFormGroup.control.get(`${this.inspectionPoint.name}Group`) as FormGroup;
	}
}

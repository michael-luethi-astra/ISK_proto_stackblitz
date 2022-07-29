import {InspectionPoint} from 'src/app/lib/inspection-point';
import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormGroupDirective} from '@angular/forms';

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
		this.form.get(this.inspectionPoint.name)?.valueChanges.subscribe(value => {
			if (value !== '' && this.infringements.length !== null && this.infringements.length === 0) {
				this.addInfringement();
			}
		});
	}

	get infringements() {
		return this.form.get(`${this.inspectionPoint.name}Infringements`) as FormArray;
	}

	addInfringement() {
		this.infringements.push(new FormControl('0'));
	}
}

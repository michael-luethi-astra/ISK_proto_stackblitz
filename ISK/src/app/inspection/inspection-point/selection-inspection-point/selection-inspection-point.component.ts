import {Enumeration} from './../../../lib/types-system/enumeration';
import {ConfigService} from './../../../config/config.service';
import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {InspectionPoint} from 'src/app/lib/inspection-point';

@Component({
	selector: 'app-selection-inspection-point',
	templateUrl: './selection-inspection-point.component.html',
	styleUrls: ['./selection-inspection-point.component.scss']
})
export class SelectionInspectionPointComponent implements OnInit {
	form!: FormGroup;
	@Input() inspectionPoint!: InspectionPoint;
	baseType!: Enumeration;

	constructor(private readonly rootFormGroup: FormGroupDirective, private readonly configService: ConfigService) {}

	ngOnInit(): void {
		this.form = this.rootFormGroup.control;
		this.baseType = this.configService.getTypeByName(this.inspectionPoint.typeRef!);
	}
}

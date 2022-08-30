import {InspectionList} from './../../lib/inspection-list';
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

interface FormGroupNamePair {
	group: FormGroup;
	name: string;
}

@Component({
	selector: 'app-inspection-list',
	templateUrl: './inspection-list.component.html',
	styleUrls: ['./inspection-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspectionListComponent implements OnInit {
	formGroup!: FormGroup;

	@Input() baseI18YKey!: string;
	@Input() config!: InspectionList;

	constructor(private readonly formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.config.inspectionPointGroups.forEach(ipg => {
			ipg.i18nKey = `${this.baseI18YKey}.${ipg.i18nGroupName}.${ipg.i18nKey ?? 'label'}`;
			ipg.inspectionPoints.forEach(ip => {
				ip.i18nKey = `${this.baseI18YKey}.${ipg.i18nGroupName}.${ip.i18nName ?? ip.name}.${ip.i18nKey ?? 'label'}`;
				ip.linearInfringements?.forEach((i, index) => {
					i.i18nKey = `${this.baseI18YKey}.${ipg.i18nGroupName}.${ip.i18nName ?? ip.name}.${ip.i18nInfringements ?? 'infringement'}.${i.i18nKey}`;
					i.value = i.value ?? (index + 1).toString();
				});
			});
		});

		this.formGroup = this.formBuilder.group({
			workingDaysInspected: new FormControl(0)
		});
		const controlGroups = this.config.inspectionPointGroups.map(inspectionPointGroup => {
			return inspectionPointGroup.inspectionPoints.map(inspectionPoint => {
				const inspectionFormGroup = new FormGroup({});
				inspectionFormGroup.addControl(inspectionPoint.name, new FormControl(inspectionPoint.default));
				if (inspectionPoint.linearInfringements!.length > 0) {
					inspectionFormGroup.addControl(`${inspectionPoint.name}Infringements`, new FormArray([] as FormControl[]));
				}
				return {
					group: inspectionFormGroup,
					name: `${inspectionPoint.name}Group`
				} as FormGroupNamePair;
			});
		});

		controlGroups.flat().forEach(pair => this.formGroup.addControl(pair.name, pair.group));

		this.formGroup.valueChanges.subscribe(t => {
			console.log(t);
		});
	}

	selectionChange(event: string) {
		console.log(event);
	}
}

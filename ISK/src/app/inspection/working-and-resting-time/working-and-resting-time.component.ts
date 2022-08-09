import {Infringement} from './../../lib/infringement';
import {InspectionPointGroup} from './../../lib/inspection-point-group';
import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {InspectionPoint} from 'src/app/lib/inspection-point';

interface FormGroupNamePair {
	group: FormGroup;
	name: string;
}

@Component({
	selector: 'app-working-and-resting-time',
	templateUrl: './working-and-resting-time.component.html',
	styleUrls: ['./working-and-resting-time.component.scss']
})
export class WorkingAndRestingTimeComponent implements OnInit {
	structure = [
		{
			i18nGroupName: 'driving-and-resting-time',
			i18nKey: 'label',
			inspectionPoints: [
				{
					name: 'drivingTime',
					i18nName: 'driving-time',
					default: '0',
					infringements: [
						{
							i18nKey: 'art6.1-nr2',
							value: '1'
						},
						{
							i18nKey: 'art6.1-nr3',
							value: '2'
						}
					] as Infringement[]
				},
				{
					name: 'breaks',
					default: '0',
					infringements: [
						{
							i18nKey: 'art7-nr14',
							value: '1'
						},
						{
							i18nKey: 'art7-nr15',
							value: '2'
						}
					]
				},
				{
					name: 'restPeriods',
					i18nName: 'rest-periods',
					default: '0',
					infringements: [
						{
							i18nKey: 'art8.2-nr16',
							value: '1'
						},
						{
							i18nKey: 'art8.2-nr17',
							value: '2'
						},
						{
							i18nKey: 'art8.2-nr18',
							value: '3'
						},
						{
							i18nKey: 'art8.2-nr19',
							value: '4'
						},
						{
							i18nKey: 'art8.2-nr20',
							value: '5'
						},
						{
							i18nKey: 'art8.2-nr21',
							value: '6'
						},
						{
							i18nKey: 'art8.5-nr22',
							value: '7'
						},
						{
							i18nKey: 'art8.5-nr23',
							value: '8'
						},
						{
							i18nKey: 'art8.6-nr24',
							value: '9'
						},
						{
							i18nKey: 'art8.6-nr25',
							value: '10'
						},
						{
							i18nKey: 'art8.6-nr26',
							value: '11'
						},
						{
							i18nKey: 'art8.6-nr27',
							value: '12'
						},
						{
							i18nKey: 'art8.6-nr28-1',
							value: '13'
						},
						{
							i18nKey: 'art8.6-nr28-2',
							value: '14'
						}
					]
				},
				{
					name: '12DayRuleDerogation',
					i18nName: '12-day-rule-derogation',
					default: '0',
					infringements: [
						{
							i18nKey: 'art8.6a-nr29-1',
							value: '1'
						},
						{
							i18nKey: 'art8.6a-nr29-2',
							value: '2'
						},
						{
							i18nKey: 'art8.6a-b-ii-nr30-1',
							value: '3'
						},
						{
							i18nKey: 'art8.6a-b-ii-nr30-2',
							value: '4'
						},
						{
							i18nKey: 'art8.6a-d-nr31-1',
							value: '5'
						},
						{
							i18nKey: 'art8.6a-d-nr31-2',
							value: '6'
						}
					]
				},
				{
					name: 'workOrganisation',
					i18nName: 'work-organisation',
					default: '0',
					infringements: [
						{
							i18nKey: 'art10.1-nr32',
							value: '1',
							exclusionGroup: 1
						},
						{
							i18nKey: 'art10.2-nr33',
							value: '2',
							exclusionGroup: 2
						}
					]
				}
			] as InspectionPoint[]
		},
		{
			i18nGroupName: 'tachograph',
			inspectionPoints: [
				{
					name: 'installationOfTachograph',
					i18nName: 'installation-of-tachograph',
					infringements: [
						{
							i18nKey: 'art3.1-nr1-and-art22',
							value: '1'
						}
					]
				}
			] as InspectionPoint[]
		}
	] as InspectionPointGroup[];
	formGroup!: FormGroup;

	@Input() baseI18YKey!: string;

	constructor(private readonly formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.structure.forEach(ipg => {
			ipg.i18nKey = `${this.baseI18YKey}.${ipg.i18nGroupName}.${ipg.i18nKey ?? 'label'}`;
			ipg.inspectionPoints.forEach(ip => {
				ip.i18nKey = `${this.baseI18YKey}.${ipg.i18nGroupName}.${ip.i18nName ?? ip.name}.${ip.i18nKey ?? 'label'}`;
				ip.infringements.forEach(i => {
					i.i18nKey = `${this.baseI18YKey}.${ipg.i18nGroupName}.${ip.i18nName ?? ip.name}.${ip.i18nInfringements ?? 'infringement'}.${i.i18nKey}`;
				});
			});
		});
		this.formGroup = this.formBuilder.group({
			workingDaysInspected: new FormControl(0)
		});
		const controlGroups = this.structure.map(inspectionPointGroup => {
			return inspectionPointGroup.inspectionPoints.map(inspectionPoint => {
				const inspectionFormGroup = new FormGroup({});
				inspectionFormGroup.addControl(inspectionPoint.name, new FormControl(inspectionPoint.default));
				if (inspectionPoint.infringements.length > 0) {
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
}

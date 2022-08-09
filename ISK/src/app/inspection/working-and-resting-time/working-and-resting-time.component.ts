import {Infringement} from './../../lib/infringement';
import {InspectionPointGroup} from './../../lib/inspection-point-group';
import {Component, OnInit} from '@angular/core';
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
			i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.label',
			inspectionPoints: [
				{
					name: 'drivingTime',
					i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.driving-time.label',
					default: '0',
					infringements: [
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.driving-time.infringement.art6.1-nr2',
							value: '1'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.driving-time.infringement.art6.1-nr3',
							value: '2'
						}
					] as Infringement[]
				},
				{
					name: 'breaks',
					i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.breaks.label',
					default: '0',
					infringements: [
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.breaks.infringement.art7-nr14',
							value: '1'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.breaks.infringement.art7-nr15',
							value: '2'
						}
					]
				},
				{
					name: 'rest-periods',
					i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.label',
					default: '0',
					infringements: [
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.2-nr16',
							value: '1'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.2-nr17',
							value: '2'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.2-nr18',
							value: '3'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.2-nr19',
							value: '4'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.2-nr20',
							value: '5'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.2-nr21',
							value: '6'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.5-nr22',
							value: '7'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.5-nr23',
							value: '8'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.6-nr24',
							value: '9'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.6-nr25',
							value: '10'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.6-nr26',
							value: '11'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.6-nr27',
							value: '12'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.6-nr28-1',
							value: '13'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.rest-periods.infringement.art8.6-nr28-2',
							value: '14'
						}
					]
				},
				{
					name: '12-day-rule-derogation',
					i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.12-day-rule-derogation.label',
					default: '0',
					infringements: [
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.12-day-rule-derogation.infringement.art8.6a-nr29-1',
							value: '1'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.12-day-rule-derogation.infringement.art8.6a-nr29-2',
							value: '2'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.12-day-rule-derogation.infringement.art8.6a-b-ii-nr30-1',
							value: '3'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.12-day-rule-derogation.infringement.art8.6a-b-ii-nr30-2',
							value: '4'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.12-day-rule-derogation.infringement.art8.6a-d-nr31-1',
							value: '5'
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.12-day-rule-derogation.infringement.art8.6a-d-nr31-2',
							value: '6'
						}
					]
				},
				{
					name: 'work-organisation',
					i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.work-organisation.label',
					default: '0',
					infringements: [
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.work-organisation.infringement.art10.1-nr32',
							value: '1',
							exclusionGroup: 1
						},
						{
							i18nKey: 'inspection.working-and-resting-time.driving-and-resting-time.work-organisation.infringement.art10.2-nr33',
							value: '2',
							exclusionGroup: 2
						}
					]
				}
			] as InspectionPoint[]
		}
	] as InspectionPointGroup[];
	formGroup!: FormGroup;

	constructor(private readonly formBuilder: FormBuilder) {}

	ngOnInit(): void {
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

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
					linearInfringements: [
						{i18nKey: 'art6.1-nr2', exclusionGroup: 1},
						{i18nKey: 'art6.1-nr3', exclusionGroup: 1},
						{i18nKey: 'art6.1-nr4', exclusionGroup: 1},
						{i18nKey: 'art6.1-nr5', exclusionGroup: 1},
						{i18nKey: 'art6.1-nr6', exclusionGroup: 1},
						{i18nKey: 'art6.1-nr7', exclusionGroup: 1},
						{i18nKey: 'art6.2-nr8', exclusionGroup: 2},
						{i18nKey: 'art6.2-nr9', exclusionGroup: 2},
						{i18nKey: 'art6.2-nr10', exclusionGroup: 2},
						{i18nKey: 'art6.3-nr11', exclusionGroup: 3},
						{i18nKey: 'art6.3-nr12', exclusionGroup: 3},
						{i18nKey: 'art6.3-nr13', exclusionGroup: 3}
					] as Infringement[],
					hierarchicalInfringementTreeRoot: {
						i18nKeyHeader: 'Welche Beschränkung wurde überschritten?',
						childs: [
							{
								i18nKeySelectionItem: 'Tägliche Lenkzeit',
								i18nKeyHeader: 'Ist eine Bewilligung zu einer erweiterten Lenkzeit vorhanden?',
								childs: [
									{
										i18nKeySelectionItem: 'Nein (Lenkzeit limitiert auf 9h)',
										i18nKeyHeader: 'Bereich',
										childs: [
											{i18nKeySelectionItem: '10 Std. ≤ … < 11 Std.', value: '1'},
											{i18nKeySelectionItem: '11 Std. ≤ … < 13.5 Std.', value: '2'},
											{i18nKeySelectionItem: '13.5 Std. ≤ …', value: '3'}
										]
									},
									{
										i18nKeySelectionItem: 'Ja (Lenkzeit limitiert auf 10h)',
										i18nKeyHeader: 'Bereich',
										childs: [
											{i18nKeySelectionItem: '11 Std. ≤ … < 12 Std.', value: '4'},
											{i18nKeySelectionItem: '12 Std. ≤ … < 15 Std.', value: '5'},
											{i18nKeySelectionItem: '15 Std. ≤ …', value: '6'}
										]
									}
								]
							},
							{
								i18nKeySelectionItem: 'Wöchentlichen Lenkzeit',
								i18nKeyHeader: 'Bereich',
								childs: [
									{i18nKeySelectionItem: '60 Std. ≤ … < 65 Std.', value: '7'},
									{i18nKeySelectionItem: '65 Std. ≤ … < 70 Std.', value: '8'},
									{i18nKeySelectionItem: '70 Std. ≤ …', value: '9'}
								]
							},
							{
								i18nKeySelectionItem: 'Maximale Gesamtlenkzeit während zweier aufeinander folgender Wochen',
								i18nKeyHeader: 'Bereich',
								childs: [
									{i18nKeySelectionItem: '100 Std. ≤ … < 105 Std.', value: '10'},
									{i18nKeySelectionItem: '105 Std. ≤ … < 112,5 Std.', value: '11'},
									{i18nKeySelectionItem: '112,5 Std. ≤ …', value: '12'}
								]
							}
						]
					}
				},
				{
					name: 'breaks',
					default: '0',
					linearInfringements: [{i18nKey: 'art7-nr14'}, {i18nKey: 'art7-nr15'}]
				},
				{
					name: 'restPeriods',
					i18nName: 'rest-periods',
					default: '0',
					linearInfringements: [
						{i18nKey: 'art8.2-nr16'},
						{i18nKey: 'art8.2-nr17'},
						{i18nKey: 'art8.2-nr18'},
						{i18nKey: 'art8.2-nr19'},
						{i18nKey: 'art8.2-nr20'},
						{i18nKey: 'art8.2-nr21'},
						{i18nKey: 'art8.5-nr22'},
						{i18nKey: 'art8.5-nr23'},
						{i18nKey: 'art8.6-nr24'},
						{i18nKey: 'art8.6-nr25'},
						{i18nKey: 'art8.6-nr26'},
						{i18nKey: 'art8.6-nr27'},
						{i18nKey: 'art8.6-nr28-1'},
						{i18nKey: 'art8.6-nr28-2'}
					]
				},
				{
					name: '12DayRuleDerogation',
					i18nName: '12-day-rule-derogation',
					default: '0',
					linearInfringements: [
						{i18nKey: 'art8.6a-nr29-1'},
						{i18nKey: 'art8.6a-nr29-2'},
						{i18nKey: 'art8.6a-b-ii-nr30-1'},
						{i18nKey: 'art8.6a-b-ii-nr30-2'},
						{i18nKey: 'art8.6a-d-nr31-1'},
						{i18nKey: 'art8.6a-d-nr31-2'}
					]
				},
				{
					name: 'workOrganisation',
					i18nName: 'work-organisation',
					default: '0',
					linearInfringements: [
						{i18nKey: 'art10.1-nr32', exclusionGroup: 1},
						{i18nKey: 'art10.2-nr33', exclusionGroup: 2}
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
					linearInfringements: [{i18nKey: 'art3.1-nr1-and-art22'}]
				},
				{
					name: 'useOfTachographDriverCardOrRecordSheet',
					i18nName: 'use-of-tachograph-driver-card-or-record-sheet',
					linearInfringements: [
						{i18nKey: 'art23.1-nr2'},
						{i18nKey: 'art27-nr3'},
						{i18nKey: 'art27-nr4'},
						{i18nKey: 'art27-nr5'},
						{i18nKey: 'art27-nr6'},
						{i18nKey: 'art32.1-nr7'},
						{i18nKey: 'art32.1-and-art33.1-nr8'},
						{i18nKey: 'art32.3-nr9'},
						{i18nKey: 'art32.3-nr10'},
						{i18nKey: 'art33.2-nr11'},
						{i18nKey: 'art33.2-nr12'},
						{i18nKey: 'art34.1-nr13'},
						{i18nKey: 'art34.1-nr14'},
						{i18nKey: 'art34.1-nr15'},
						{i18nKey: 'art34.2-nr16'},
						{i18nKey: 'art34.3-nr17'},
						{i18nKey: 'art34.4-nr18'},
						{i18nKey: 'art34.5-nr19'}
					]
				},
				{
					name: 'producingInformation',
					i18nName: 'producing-information',
					linearInfringements: [{i18nKey: 'art36-nr20'}, {i18nKey: 'art36-nr21'}, {i18nKey: 'art36-nr22'}, {i18nKey: 'art36-nr23'}, {i18nKey: 'art36-nr24'}]
				},
				{
					name: 'malfunctioning',
					linearInfringements: [{i18nKey: 'art37.1-and-art22.1-nr25'}, {i18nKey: 'art37.2-nr26'}]
				}
			] as InspectionPoint[]
		},
		{
			i18nGroupName: 'working-time-rules',
			inspectionPoints: [
				{
					name: 'maximumWeeklyWorkingTime',
					i18nName: 'maximum-weekly-working-time',
					linearInfringements: [{i18nKey: 'art4-nr1'}, {i18nKey: 'art4-nr2'}, {i18nKey: 'art4-nr3'}, {i18nKey: 'art4-nr4'}]
				},
				{
					name: 'breaks',
					linearInfringements: [{i18nKey: 'art5.1-nr5'}, {i18nKey: 'art5.1-nr6'}, {i18nKey: 'art5.1-nr7'}, {i18nKey: 'art5.1-nr8'}]
				},
				{
					name: 'nightWork',
					i18nName: 'night-work',
					linearInfringements: [{i18nKey: 'art7.1-nr9'}, {i18nKey: 'art7.1-nr10'}]
				},
				{
					name: 'records',
					linearInfringements: [{i18nKey: 'art9-nr11'}, {i18nKey: 'art9-nr12'}]
				}
			]
		}
	] as InspectionPointGroup[];
	formGroup!: FormGroup;

	@Input() baseI18YKey!: string;
	testing = ['0', '0'];

	constructor(private readonly formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.structure.forEach(ipg => {
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
		const controlGroups = this.structure.map(inspectionPointGroup => {
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
		this.testing[0] = event;
		console.log(event);
	}
}

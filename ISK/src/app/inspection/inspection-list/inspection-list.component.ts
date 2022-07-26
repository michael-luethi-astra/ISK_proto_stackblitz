import {InspectionPointGroup} from './../../lib/inspection-point-group';
import {InspectionPoint} from './../../lib/inspection-point';
import {InspectionList} from './../../lib/inspection-list';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs';
import {NGXLogger} from 'ngx-logger';
import {RouteDataListDataUtility} from './route-data-list-data-utility';
import {InspectionPointType} from 'src/app/lib/inspection-point-type.enum';
import {HierarchicalInfringement} from 'src/app/lib/hierarchical-infringement';

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

	config!: InspectionList;

	constructor(private readonly formBuilder: FormBuilder, activeRoute: ActivatedRoute, readonly logger: NGXLogger) {
		activeRoute.data.pipe(take(1)).subscribe(data => (this.config = RouteDataListDataUtility.get(data)));
	}

	ngOnInit(): void {
		this.config.inspectionPointGroups.forEach(ipg => {
			ipg.title = ipg.title ?? `${this.baseI18YKey}.${ipg.i18nGroupName}.${'label'}`;
			ipg.defaultSelectionPointSet = ipg.defaultSelectionPointSet ?? this.config.defaultSelectionPointSet;
			ipg.defaultSelectionPointWithClassificationSet = ipg.defaultSelectionPointWithClassificationSet ?? this.config.defaultSelectionPointWithClassificationSet;
			ipg.defaultExchangeInterface = ipg.defaultExchangeInterface ?? this.config.defaultExchangeInterface;
			ipg.inspectionPoints.forEach(ip => this.initInspectionPoint(ipg, ip));
		});

		this.formGroup = this.formBuilder.group({});
		const controlGroups = this.config.inspectionPointGroups.map(inspectionPointGroup => {
			return inspectionPointGroup.inspectionPoints.map(inspectionPoint => {
				const inspectionFormGroup = new FormGroup({});
				inspectionFormGroup.addControl(inspectionPoint.name, new FormControl(inspectionPoint.default));
				if (
					(inspectionPoint.linearInfringements !== undefined && inspectionPoint.linearInfringements.length > 0) ||
					inspectionPoint.hierarchicalInfringementTreeRoot !== undefined
				) {
					this.logger.trace(`Verstossarra für Kontrollpunkt ${inspectionPoint.name} hinzugefügt`);
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
			this.logger.log(t);
		});
	}

	get baseI18YKey(): string {
		return `inspection.${this.config.id}`;
	}

	private initInspectionPoint(ipg: InspectionPointGroup, ip: InspectionPoint) {
		ip.title = ip.title ?? `${this.baseI18YKey}.${ipg.i18nGroupName}.${ip.i18nName ?? ip.name}.${'label'}`;
		ip.selectionPointSet = ip.selectionPointSet ?? ipg.defaultSelectionPointSet;
		ip.selectionPointWithClassificationSet = ip.selectionPointWithClassificationSet ?? ipg.defaultSelectionPointWithClassificationSet;
		ip.type = ip.type ?? InspectionPointType.Default;
		ip.defaultExchangeInterface = ip.defaultExchangeInterface ?? ipg.defaultExchangeInterface;

		ip.linearInfringements?.forEach((i, index) => {
			i.title = i.title ?? `${this.baseI18YKey}.${ipg.i18nGroupName}.${ip.i18nName ?? ip.name}.${ip.i18nInfringements ?? 'infringement'}.${i.i18nName}`;
			i.value = i.value ?? (index + 1).toString();
			i.exchangeInterface = i.exchangeInterface ?? ip.defaultExchangeInterface;
		});

		if (ip.hierarchicalInfringementTreeRoot !== undefined) {
			this.setupValueStructure(ip.hierarchicalInfringementTreeRoot);
		}
	}

	private setupValueStructure(infringement: HierarchicalInfringement, childIndex?: number): number {
		childIndex = childIndex ?? 1;

		if (infringement.childs === undefined) {
			infringement.internalValue = childIndex;
			childIndex++;
		} else {
			infringement.childs.forEach((i, index) => {
				i.internalValue = index + 1;
				childIndex = this.setupValueStructure(i, childIndex);
			});
		}

		return childIndex;
	}
}

import {InspectionPoint} from './inspection-point';
import {SelectionPoints} from './selection-points.enum';

export interface InspectionPointGroup {
	inspectionPoints: InspectionPoint[];
	i18nGroupName: string;
	title: string;
	defaultSelectionPointSet?: SelectionPoints[];
	defaultSelectionPointWithClassificationSet?: SelectionPoints[];
}

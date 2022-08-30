import {InspectionPointGroup} from './inspection-point-group';
import {SelectionPoints} from './selection-points.enum';

export interface InspectionList {
	title: string;
	defaultSelectionPointSet?: SelectionPoints[];
	defaultSelectionPointWithClassificationSet?: SelectionPoints[];
	inspectionPointGroups: InspectionPointGroup[];
}

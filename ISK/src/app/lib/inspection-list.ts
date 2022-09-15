import {ExchangeInterface} from './exchange-interface.enum';
import {InspectionPointGroup} from './inspection-point-group';
import {SelectionPoints} from './selection-points.enum';

export interface InspectionList {
	id: string;
	title: string;
	defaultSelectionPointSet?: SelectionPoints[];
	defaultSelectionPointWithClassificationSet?: SelectionPoints[];
	defaultExchangeInterface?: ExchangeInterface;
	inspectionPointGroups: InspectionPointGroup[];
}

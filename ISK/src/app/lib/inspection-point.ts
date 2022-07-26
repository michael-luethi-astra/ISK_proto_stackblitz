import {ExchangeInterface} from './exchange-interface.enum';
import {HierarchicalInfringement} from './hierarchical-infringement';
import {Infringement} from './infringement';
import {InspectionPointType} from './inspection-point-type.enum';
import {SelectionPoints} from './selection-points.enum';
export interface InspectionPoint {
	name: string;
	linearInfringements?: Infringement[];
	hierarchicalInfringementTreeRoot?: HierarchicalInfringement;
	i18nInfringements?: string;
	i18nName?: string;
	title: string;
	default: string;
	selectionPointSet?: SelectionPoints[];
	selectionPointWithClassificationSet?: SelectionPoints[];
	type?: InspectionPointType;
	typeRef?: string;
	defaultExchangeInterface?: ExchangeInterface;
}

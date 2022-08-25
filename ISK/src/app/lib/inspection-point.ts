import {HierarchicalInfringement} from './hierarchical-infringement';
import {Infringement} from './infringement';
export interface InspectionPoint {
	name: string;
	linearInfringements?: Infringement[];
	hierarchicalInfringementTreeRoot?: HierarchicalInfringement;
	i18nInfringements?: string;
	i18nName?: string;
	i18nKey: string;
	default: string;
}

import {HierarchicalInfingement} from './hierarchical-infingement';
import {Infringement} from './infringement';
export interface InspectionPoint {
	name: string;
	infringements?: Infringement[];
	hierarchicalInfingements?: HierarchicalInfingement[];
	i18nInfringements?: string;
	i18nName?: string;
	i18nKey: string;
	default: string;
}

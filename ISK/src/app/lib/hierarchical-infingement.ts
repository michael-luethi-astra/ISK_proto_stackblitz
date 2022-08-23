import {Infringement} from './infringement';
export interface HierarchicalInfingement {
	i18nKey: string;
	i18nName: string;
	subciterias?: HierarchicalInfingement[];
	ranges?: Infringement[];
}

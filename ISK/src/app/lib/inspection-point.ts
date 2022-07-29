import {Infringement} from './infringement';
export interface InspectionPoint {
	name: string;
	infringements: Infringement[];
	i18nKey: string;
	default: string;
}

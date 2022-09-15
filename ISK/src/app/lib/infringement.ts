import {AssessmentDegree} from './assessment-degree.enum';
import {ExchangeInterface} from './exchange-interface.enum';

export interface Infringement {
	value?: string;
	title?: string;
	i18nName?: string;
	exclusionGroup: number | null;
	exchangeInterface?: ExchangeInterface;
	assessmentDegree?: AssessmentDegree;
}

import {AssessmentDegree} from './assessment-degree.enum';
import {ExchangeInterface} from './exchange-interface.enum';

export interface HierarchicalInfringement {
	i18nKeyHeader?: string;
	i18nNameHeader?: string;
	i18nKeySelectionItem?: string;
	i18nNameSelectionItem?: string;
	childs?: HierarchicalInfringement[];
	value?: string;
	exchangeInterface?: ExchangeInterface;
	internalValue?: number;
	assessmentDegree?: AssessmentDegree;
}

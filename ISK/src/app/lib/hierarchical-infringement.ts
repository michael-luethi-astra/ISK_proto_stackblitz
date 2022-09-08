export interface HierarchicalInfringement {
	i18nKeyHeader?: string;
	i18nNameHeader?: string;
	i18nKeySelectionItem?: string;
	i18nNameSelectionItem?: string;
	childs?: HierarchicalInfringement[];
	value?: string;
	internalValue?: number;
}

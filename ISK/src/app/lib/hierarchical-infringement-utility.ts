import {HierarchicalInfringement} from './hierarchical-infringement';
export class HierarchicalInfringementUtility {
	static getRootIndexByInternalValue(root: HierarchicalInfringement, value: number): number {
		return root.childs!.findIndex(i => HierarchicalInfringementUtility.searchValueMatch(i, value));
	}

	private static searchValueMatch(infringement: HierarchicalInfringement, value: number): boolean {
		if (infringement.childs === undefined) {
			return infringement.internalValue === value;
		}
		return infringement.childs.some(i => HierarchicalInfringementUtility.searchValueMatch(i, value));
	}
}

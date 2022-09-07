import {InspectionPoint} from './inspection-point';
export class InspectionPointUtility {
	static providesLinearInfringementClassification(inspectionPoint: InspectionPoint) {
		return !(inspectionPoint.linearInfringements === undefined);
	}

	static providesHierarchicalInfringementClassification(inspectionPoint: InspectionPoint) {
		return !(inspectionPoint.hierarchicalInfringementTreeRoot === undefined);
	}
}

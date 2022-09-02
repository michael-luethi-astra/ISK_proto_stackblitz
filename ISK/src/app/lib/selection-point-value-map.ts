import {SelectionPoints} from './selection-points.enum';

export class SelectionPointValueMap {
	static readonly values: {[key in SelectionPoints]: string} = {
		[SelectionPoints.Checked]: '1',
		[SelectionPoints.OBV]: '2',
		[SelectionPoints.Report]: '3',
		[SelectionPoints.NotApplicable]: '4',
		[SelectionPoints.NotChecked]: '5'
	};
}

import {Data} from '@angular/router';
import {InspectionList} from 'src/app/lib/inspection-list';

export class RouteDataListDataUtility {
	static readonly dataSegmentName = 'listConfig';

	static create(list: InspectionList): Data {
		const data: Data = {};
		data[RouteDataListDataUtility.dataSegmentName] = list;
		return data;
	}

	static get(data: Data): InspectionList {
		return data[RouteDataListDataUtility.dataSegmentName] as InspectionList;
	}
}

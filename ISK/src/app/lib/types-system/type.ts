import {EnumItem} from './enum-item';
import {TypeDesignation} from './type-designation.enum';
export interface Type {
	type: TypeDesignation;
	name: string;
	items?: EnumItem[];
}

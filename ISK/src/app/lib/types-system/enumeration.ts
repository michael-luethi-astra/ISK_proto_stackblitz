import {EnumItem} from './enum-item';
import {AbstractType} from './abstract-type';

export class Enumeration extends AbstractType {
	constructor(name: string, readonly items: EnumItem[]) {
		super(name);
	}
}

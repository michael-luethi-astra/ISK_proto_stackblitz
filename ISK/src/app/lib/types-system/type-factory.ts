import {AbstractType} from './abstract-type';
import {Enumeration} from './enumeration';
import {Type} from './type';
import {TypeDesignation} from './type-designation.enum';

export class TypeFactory {
	static createTypes(definitions: Type[]): AbstractType[] {
		return definitions.map(d => TypeFactory.mapDefToType(d));
	}

	private static mapDefToType(def: Type): AbstractType {
		switch (def.type) {
			case TypeDesignation.Enumeration:
				return new Enumeration(def.name, def.items!);

			default:
				throw new Error();
		}
	}
}

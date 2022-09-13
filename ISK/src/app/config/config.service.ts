import {AbstractType} from './../lib/types-system/abstract-type';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {InspectionList} from '../lib/inspection-list';
import {Type} from '../lib/types-system/type';
import {TypeFactory} from '../lib/types-system/type-factory';

export interface Config {
	lists: InspectionList[];
	types: Type[];
}

@Injectable()
export class ConfigService {
	configUrl = 'assets/config.json';
	configBuffer!: Config;
	private typesBuffer!: AbstractType[];
	constructor(private readonly http: HttpClient) {}

	loadConfig() {
		return this.http
			.get<Config>(this.configUrl)
			.pipe(
				retry(3), // retry a failed request up to 3 times
				catchError(this.handleError) // then handle the error
			)
			.pipe(
				map(c => {
					this.configBuffer = c;
					this.typesBuffer = TypeFactory.createTypes(c.types);
				})
			);
	}

	getTypeByName<T extends AbstractType>(name: string): T {
		const match = this.types.find(t => t.name === name);

		if (match === undefined) {
			throw new Error();
		}

		return match as T;
	}

	get config() {
		return this.configBuffer;
	}

	get types() {
		return this.typesBuffer;
	}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong.
			console.error(`Backend returned code ${error.status}, body was: `, error.error);
		}
		// Return an observable with a user-facing error message.
		return throwError(() => new Error('Something bad happened; please try again later.'));
	}
}

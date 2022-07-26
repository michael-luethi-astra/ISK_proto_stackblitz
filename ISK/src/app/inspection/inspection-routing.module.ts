import {NGXLogger} from 'ngx-logger';
import {InspectionListComponent} from './inspection-list/inspection-list.component';
import {ConfigService} from './../config/config.service';
import {ROUTES, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {InspectionComponent} from './inspection.component';
import {RouteDataListDataUtility} from './inspection-list/route-data-list-data-utility';

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild([])],
	exports: [RouterModule],
	providers: [
		{
			provide: ROUTES,
			useFactory: (configServeice: ConfigService, logger: NGXLogger) => {
				logger.trace(`inspection module routes initializes...`);
				const innerRoutes: Routes = configServeice.config.lists.map(list => {
					return {path: list.id, component: InspectionListComponent, data: RouteDataListDataUtility.create(list)};
				}) as Routes;

				const routes: Routes = [
					{
						path: '',
						component: InspectionComponent,
						children: innerRoutes
					}
				];

				return routes;
			},
			deps: [ConfigService, NGXLogger],
			multi: true
		}
	]
})
export class InspectionRoutingModule {}

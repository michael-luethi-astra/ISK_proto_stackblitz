import {InspectionListComponent} from './inspection-list/inspection-list.component';
import {ConfigService} from './../config/config.service';
import {ROUTES, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {InspectionComponent} from './inspection.component';

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild([])],
	exports: [RouterModule],
	providers: [
		{
			provide: ROUTES,
			useFactory: (configServeice: ConfigService) => {
				console.log('Routes');
				const innerRoutes: Routes = configServeice.config.lists.map(list => {
					return {path: list.id, component: InspectionListComponent};
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
			deps: [ConfigService],
			multi: true
		}
	]
})
export class InspectionRoutingModule {}

import {NgModule} from '@angular/core';
import {ROUTES, RouterModule, Routes} from '@angular/router';
import {ObUnknownRouteModule} from '@oblique/oblique';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'inspection', loadChildren: () => import('./inspection/inspection.module').then(m => m.InspectionModule)}
];

@NgModule({
	imports: [RouterModule.forRoot([]), ObUnknownRouteModule],
	exports: [RouterModule],
	providers: [
		{
			provide: ROUTES,
			useFactory: () => {
				return routes;
			},
			multi: true
		}
	]
})
export class AppRoutingModule {}

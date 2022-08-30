import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {InspectionListComponent} from './inspection-list/inspection-list.component';
import {InspectionComponent} from './inspection.component';

const routes: Routes = [
	{
		path: 'inspection',
		component: InspectionComponent,
		children: [
			{path: '', redirectTo: 'working', pathMatch: 'full'},
			{path: 'working', component: InspectionListComponent}
		]
	}
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InspectionRoutingModule {}

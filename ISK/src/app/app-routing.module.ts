import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObUnknownRouteModule } from '@oblique/oblique';
import { HomeComponent } from './home/home.component';
import { InspectionComponent } from './inspection/inspection.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'inspection', component: InspectionComponent },
  { path: '**', redirectTo: 'unknown-route' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ObUnknownRouteModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

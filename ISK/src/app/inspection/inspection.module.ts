import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InspectionComponent} from './inspection.component';
import {InfringementWithoutObvComponent} from '../lib/infringement-without-obv/infringement-without-obv.component';
import {HierarchicalQuestionaryInfringementClassificationComponent} from '../lib/hierarchical-questionary-infringement-classification/hierarchical-questionary-infringement-classification.component';
import {InspectionListComponent} from './inspection-list/inspection-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ObButtonModule, ObColumnLayoutModule, ObExternalLinkModule, ObIconModule, ObNavTreeModule} from '@oblique/oblique';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {TranslateModule} from '@ngx-translate/core';
import {InspectionRoutingModule} from './inspection-routing.module';
import {InspectionPointComponent} from './inspection-point/inspection-point.component';
import {LinearInfringementClassificationComponent} from './linear-infringement-classification/linear-infringement-classification.component';

@NgModule({
	declarations: [
		InspectionComponent,
		InfringementWithoutObvComponent,
		HierarchicalQuestionaryInfringementClassificationComponent,
		InspectionListComponent,
		InspectionPointComponent,
		LinearInfringementClassificationComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ObButtonModule, // add other Oblique modules as needed
		ObIconModule.forRoot(),
		ObColumnLayoutModule,
		ObNavTreeModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatRadioModule,
		MatFormFieldModule,
		MatSelectModule,
		ObExternalLinkModule,
		TranslateModule,
		InspectionRoutingModule
	]
})
export class InspectionModule {}

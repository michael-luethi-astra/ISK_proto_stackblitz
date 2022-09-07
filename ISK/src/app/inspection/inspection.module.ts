import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InspectionComponent} from './inspection.component';
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
import {LinearInfringementClassificationComponent} from './infringement-classification/linear-infringement-classification/linear-infringement-classification.component';
import {HierarchicalInfringementClassificationComponent} from './infringement-classification//hierarchical-infringement-classification/hierarchical-infringement-classification.component';
import { DefaultInspectionPointComponent } from './inspection-point/default-inspection-point/default-inspection-point.component';
import { NumberInspectionPointComponent } from './inspection-point/number-inspection-point/number-inspection-point.component';
import { BinaryQuestionInspectionPointComponent } from './inspection-point/binary-question-inspection-point/binary-question-inspection-point.component';
import { NoticeInspectionPointComponent } from './inspection-point/notice-inspection-point/notice-inspection-point.component';

@NgModule({
	declarations: [
		InspectionComponent,
		HierarchicalQuestionaryInfringementClassificationComponent,
		InspectionListComponent,
		InspectionPointComponent,
		LinearInfringementClassificationComponent,
		HierarchicalInfringementClassificationComponent,
  DefaultInspectionPointComponent,
  NumberInspectionPointComponent,
  BinaryQuestionInspectionPointComponent,
  NoticeInspectionPointComponent
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

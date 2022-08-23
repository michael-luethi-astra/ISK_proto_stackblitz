import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ObMasterLayoutModule,
  ObButtonModule,
  ObIconModule,
  ObMasterLayoutConfig,
  multiTranslateLoader,
  ObHttpApiInterceptor,
  OB_BANNER,
  ObExternalLinkModule,
} from '@oblique/oblique';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InspectionComponent } from './inspection/inspection.component';
import { WorkingAndRestingTimeComponent } from './inspection/working-and-resting-time/working-and-resting-time.component';
import { InfringementWithoutObvComponent } from './lib/infringement-without-obv/infringement-without-obv.component';
import { MatSelectModule } from '@angular/material/select';
import { QuestionaryHierarchicalInfringementComponent } from './lib/questionary-hierarchical-infringement/questionary-hierarchical-infringement.component';
import { HierarchicalQuestionaryInfringementClassificationComponent } from './lib/hierarchical-questionary-infringement-classification/hierarchical-questionary-infringement-classification.component';

registerLocaleData(localeDECH);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InspectionComponent,
    WorkingAndRestingTimeComponent,
    InfringementWithoutObvComponent,
    QuestionaryHierarchicalInfringementComponent,
    HierarchicalQuestionaryInfringementClassificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObMasterLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ObButtonModule, // add other Oblique modules as needed
    ObIconModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot(multiTranslateLoader()),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
		MatSelectModule,
    ObExternalLinkModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-CH' },
    { provide: HTTP_INTERCEPTORS, useClass: ObHttpApiInterceptor, multi: true },
    { provide: OB_BANNER, useValue: environment.banner },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(config: ObMasterLayoutConfig) {
    config.locale.locales = ['de-CH'];
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { CardConChartsComponent } from './card-con-charts/card-con-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantillasComponent,
    DashboardComponent,
    CardComponent,
    CardConChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

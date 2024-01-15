import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { CardComponent } from './card/card.component';
import { CardConChartComponent } from './card-con-chart/card-con-chart.component';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantillasComponent,
    DashboardComponent,
    CardComponent,
    CardConChartComponent,
    BotonComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

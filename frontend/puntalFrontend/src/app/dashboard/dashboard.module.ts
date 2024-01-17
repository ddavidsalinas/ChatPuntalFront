import { NgModule } from '@angular/core';
import { PlantillaModule } from '../plantilla/plantilla.module';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardconchartComponent } from './cardconchart/cardconchart.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { PlantillasComponent } from '../plantillas/plantillas.component';
import { Chart2Component } from './chart2/chart2.component';



@NgModule({
  declarations: [
    CardComponent,
    CardconchartComponent,
    ChartComponent,
 
    //PlantillasComponent,
    DashboardComponent,
    Chart2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[DashboardComponent

  ]
})
export class DashboardModule { }

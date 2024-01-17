import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonComponent } from './boton/boton.component';
import { NavlateralComponent } from './navlateral/navlateral.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';


@NgModule({
  declarations: [
    BotonComponent,
    NavlateralComponent,
    
    NavheaderComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule
  ]
  ,
  exports:[//NavlateralComponent,NavheaderComponent,BotonComponent,ContenidoComponent

  ]

})
export class PlantillaModule { }

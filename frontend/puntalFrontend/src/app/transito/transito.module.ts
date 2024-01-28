import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoTransitoComponent } from './contenido-transito/contenido-transito.component';
import { TablaTransitoComponent } from './tabla-transito/tabla-transito.component';
import { FormdialogoComponent } from './formdialogo/formdialogo.component';



@NgModule({
  declarations: [
    ContenidoTransitoComponent,
    TablaTransitoComponent,
    FormdialogoComponent
  ],
  imports: [
    CommonModule
  ], exports: [ContenidoTransitoComponent, TablaTransitoComponent]
})
export class TransitoModule { }

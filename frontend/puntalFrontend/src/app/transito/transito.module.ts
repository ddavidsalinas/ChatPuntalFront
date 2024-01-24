import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoTransitoComponent } from './contenido-transito/contenido-transito.component';
import { TablaTransitoComponent } from './tabla-transito/tabla-transito.component';



@NgModule({
  declarations: [
    ContenidoTransitoComponent,
    TablaTransitoComponent
  ],
  imports: [
    CommonModule
  ], exports: [ContenidoTransitoComponent, TablaTransitoComponent]
})
export class TransitoModule { }

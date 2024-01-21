import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoTransitoComponent } from './contenido-transito/contenido-transito.component';



@NgModule({
  declarations: [
    ContenidoTransitoComponent
  ],
  imports: [
    CommonModule
  ], exports: [ContenidoTransitoComponent]
})
export class TransitoModule { }

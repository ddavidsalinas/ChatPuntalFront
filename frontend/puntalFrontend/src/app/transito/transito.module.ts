import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoTransitoComponent } from './contenido-transito/contenido-transito.component';
import { FormularioComponent } from '../formulario/formulario.component';



@NgModule({
  declarations: [
    ContenidoTransitoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule
  ], exports: [ContenidoTransitoComponent]
})
export class TransitoModule { }

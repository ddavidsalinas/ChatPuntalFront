import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioPbComponent } from './formulario-pb/formulario-pb.component';
import { TablaPbComponent } from './tabla-pb/tabla-pb.component';
import { FormdialogoPbComponent } from './formdialogo-pb/formdialogo-pb.component';
import { ContenidoPbComponent } from './contenido-pb/contenido-pb.component';



@NgModule({
  declarations: [
    FormularioPbComponent,
    TablaPbComponent,
    FormdialogoPbComponent,
    ContenidoPbComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ContenidoPbComponent]
})
export class PlazaBaseModule { }

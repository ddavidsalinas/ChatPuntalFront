import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { FormularioPbComponent } from './formulario-pb/formulario-pb.component';
import { TablaPbComponent } from './tabla-pb/tabla-pb.component';
import { FormdialogoPbComponent } from './formdialogo-pb/formdialogo-pb.component';
import { ContenidoPbComponent } from './contenido-pb/contenido-pb.component';



@NgModule({
  declarations: [
    TablaComponent,
    FormularioPbComponent,
    TablaPbComponent,
    FormdialogoPbComponent,
    ContenidoPbComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlazaBaseModule { }

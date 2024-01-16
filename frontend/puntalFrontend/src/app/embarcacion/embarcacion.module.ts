import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { DataTablesModule } from 'angular-datatables';
import { EmbarcacionesComponent } from './embarcaciones/embarcaciones.component';
import { FormularioEmbarcacionComponent } from './formulario-embarcacion/formulario-embarcacion.component';



@NgModule({
  declarations: [
    TablaComponent,
    EmbarcacionesComponent,
    FormularioEmbarcacionComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [
    EmbarcacionesComponent
  ]
})
export class EmbarcacionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioPbComponent } from './formulario-pb/formulario-pb.component';
import { TablaPbComponent } from './tabla-pb/tabla-pb.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormdialogoPbComponent } from './formdialogo-pb/formdialogo-pb.component';
import { ContenidoPbComponent } from './contenido-pb/contenido-pb.component';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
      path: 'plaza-base',
      component: ContenidoPbComponent,
      children: [
        { path: 'tabla', component: TablaPbComponent },
  
      ],
    },
  ];
  


@NgModule({
  declarations: [
    FormularioPbComponent,
    TablaPbComponent,
    FormdialogoPbComponent,
    ContenidoPbComponent
    
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
  ],
  exports:[ContenidoPbComponent, TablaPbComponent]
})
export class PlazaBaseModule { }

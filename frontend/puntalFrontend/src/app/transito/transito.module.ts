import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoTransitoComponent } from './contenido-transito/contenido-transito.component';
import { TablaTransitoComponent } from './tabla-transito/tabla-transito.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormdialogoComponent } from './formdialogo/formdialogo.component';
import { TablaTripulanteComponent } from './tabla-tripulante/tabla-tripulante.component';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
{
    path: 'transitos',
    component: ContenidoTransitoComponent,
}
];


@NgModule({
  declarations: [
    FormularioComponent,
    ContenidoTransitoComponent,
    TablaTransitoComponent,
    FormdialogoComponent,
    TablaTripulanteComponent
  ],
 
  imports: [
    CommonModule,
    AppRoutingModule,
    DataTablesModule,
    RouterModule.forChild(routes),
  ], exports: [ContenidoTransitoComponent,  TablaTransitoComponent]
})
export class TransitoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoTransitoComponent } from './contenido-transito/contenido-transito.component';
import { TablaTransitoComponent } from './tabla-transito/tabla-transito.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormdialogoComponent } from './formdialogo/formdialogo.component';

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
    FormdialogoComponent
  ],
 
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
  ], exports: [ContenidoTransitoComponent,  TablaTransitoComponent]
})
export class TransitoModule { }

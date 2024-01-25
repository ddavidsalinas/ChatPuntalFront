import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoTransitoComponent } from './contenido-transito/contenido-transito.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path: 'transitos',
    component: ContenidoTransitoComponent,
}
];


@NgModule({
  declarations: [
    ContenidoTransitoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
  ], exports: [ContenidoTransitoComponent]
})
export class TransitoModule { }

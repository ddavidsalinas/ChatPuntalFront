import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoTransitoComponent } from './transito/contenido-transito/contenido-transito.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmbarcacionesComponent } from './embarcacion/embarcaciones/embarcaciones.component';
import { CardIncidenciaComponent } from './movil/card-incidencia/card-incidencia.component';
import { CardConfirmacionTransitoComponent } from './movil/card-confirmacion-transito/card-confirmacion-transito.component';

const routes: Routes = [
  { path: 'transito/contenido-transito', component: ContenidoTransitoComponent },
  { path: 'dashboard/dashboard', component: DashboardComponent},
  { path: 'embarcacion/embarcaciones', component: EmbarcacionesComponent},
  { path: 'movil/card-incidencia', component: CardIncidenciaComponent},
  { path: 'movil/card-confirmacion-transito', component: CardConfirmacionTransitoComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

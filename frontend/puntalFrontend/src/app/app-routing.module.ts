import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoTransitoComponent } from './transito/contenido-transito/contenido-transito.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmbarcacionesComponent } from './embarcacion/embarcaciones/embarcaciones.component';
import { NotificacionesComponent } from './notificaciones/notificaciones/notificaciones.component';
const routes: Routes = [
  { path: 'transito/contenido-transito', component: ContenidoTransitoComponent },
  { path: 'dashboard/dashboard', component: DashboardComponent },
  { path: 'embarcacion/embarcaciones', component: EmbarcacionesComponent },
  { path: 'notificaciones', component: NotificacionesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

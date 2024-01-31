import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoTransitoComponent } from './transito/contenido-transito/contenido-transito.component';
import { TablaTransitoComponent } from './transito/tabla-transito/tabla-transito.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmbarcacionesComponent } from './embarcacion/embarcaciones/embarcaciones.component';
import { NotificacionesComponent } from './notificaciones/notificaciones/notificaciones.component';
import { TablaGuardiaComponent } from './guardia-civil/tabla-guardia/tabla-guardia.component';
const routes: Routes = [
  { path: 'transito', component: ContenidoTransitoComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'embarcacion/embarcaciones', component: EmbarcacionesComponent},
  { path: 'transito/tabla-transito', component: TablaTransitoComponent },
  { path: 'guardia-civil/tabla-guardia', component: TablaGuardiaComponent },
  { path: 'notificaciones', component: NotificacionesComponent }
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

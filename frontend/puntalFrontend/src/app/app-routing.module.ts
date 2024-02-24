import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContenidoTransitoComponent } from './transito/contenido-transito/contenido-transito.component';
import { TablaTransitoComponent } from './transito/tabla-transito/tabla-transito.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmbarcacionesComponent } from './embarcacion/embarcaciones/embarcaciones.component';
import { CardIncidenciaComponent } from './movil/card-incidencia/card-incidencia.component';
import { CardConfirmacionTransitoComponent } from './movil/card-confirmacion-transito/card-confirmacion-transito.component';
import { NotificacionesComponent } from './notificaciones/notificaciones/notificaciones.component';
import { TablaGuardiaComponent } from './guardia-civil/tabla-guardia/tabla-guardia.component';
import { ContenidoPbComponent } from './plaza-base/contenido-pb/contenido-pb.component';
import { TablaTripulanteComponent } from './transito/tabla-tripulante/tabla-tripulante.component';
import { FormularioPbComponent } from './plaza-base/formulario-pb/formulario-pb.component';
import { TablaPbComponent } from './plaza-base/tabla-pb/tabla-pb.component';
import { LoginComponent } from './login/login/login.component';
import { ContenidoComponent } from './plantilla/contenido/contenido.component';
import { TablaComponent } from './embarcacion/tabla/tabla.component';
import { FormularioEmbarcacionComponent } from './embarcacion/formulario-embarcacion/formulario-embarcacion.component';
import { FormularioTransitoComponent } from './transito/formulario-transito/formulario-transito.component';
import { PlantillaGuardamuellesComponent } from './movil/plantilla-guardamuelles/plantilla-guardamuelles.component';
import { roleGuard } from './role.guard';

// const isRole = (role: string) => {
//   const roleLogged = localStorage.getItem('role')

//   return roleLogged === role
// }


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: ContenidoComponent,
    children: [
      {
        path: '',
        canActivate: [roleGuard],
        // canMatch: [() => isRole('2')],
        component: DashboardComponent,
        data: { role: '2' }
      }
    ]
  },
  {
    path: 'embarcaciones',
    canActivate: [roleGuard],
    data: { role: '2' },
    // canMatch: [() => isRole('2')],
    component: ContenidoComponent,
    children: [
      {
        path: 'tabla',
        component: TablaComponent
      },
      {
        path: 'formulario',
        component: FormularioEmbarcacionComponent
      },
      {
        path: '',
        redirectTo: 'tabla',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'plazabase',
    canActivate: [roleGuard],
    data: { role: '2' },
    // canMatch: [() => isRole('2')],
    component: ContenidoComponent,
    children: [
      {
        path: 'tabla',
        component: TablaPbComponent
      },
      {
        path: 'formulario',
        component: FormularioPbComponent
      },
      {
        path: '',
        redirectTo: 'tabla',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'transito',
    canActivate: [roleGuard],
    data: { role: '2' },
    // canMatch: [() => isRole('2')],
    component: ContenidoComponent,
    children: [
      {
        path: 'tabla',
        component: TablaTransitoComponent
      },
      {
        path: 'formulario',
        component: FormularioTransitoComponent
      },
      {
        path: '',
        redirectTo: 'tabla',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'guardiacivil',
    canActivate: [roleGuard],
    data: { role: '4' },
    // canMatch: [() => isRole('4')],
    component: ContenidoComponent, // O el componente que corresponda
   
    children: [
      {
      
        path: '',
        component: TablaGuardiaComponent
      }
    ]
  },
  {
    path: 'notificaciones',
    canActivate: [roleGuard],
    data: { role: '2' },
    // canMatch: [() => isRole('2')],
    component: ContenidoComponent, // O el componente que corresponda
    children: [
      {
        path: '',
        component: NotificacionesComponent
      }
    ]
  },
  {
    path: 'movil',
    canActivate: [roleGuard],
    data: { role: '3' },
    // canMatch: [() => isRole('3')],
    component: PlantillaGuardamuellesComponent, // O el componente que corresponda
    children: [
      {
        path: '',
       
        component: CardIncidenciaComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

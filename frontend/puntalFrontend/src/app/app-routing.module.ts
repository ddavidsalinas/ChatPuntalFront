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



// const routes: Routes = [

//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'embarcacion/embarcaciones', component: EmbarcacionesComponent },
//   { path: 'transito/tabla-transito', component: TablaTransitoComponent },
//   { path: 'plazabase/formulario', component: FormularioPbComponent },
//   { path: 'notificaciones', component: NotificacionesComponent },
//   { path: 'movil/card-incidencia', component: CardIncidenciaComponent },
//   { path: 'guardacivil', redirectTo: 'guardia-civil/tabla-guardia', pathMatch: 'full' },
//   { path: 'plazabase', component: ContenidoPbComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'movil/card-confirmacion-transito', component: CardConfirmacionTransitoComponent },
//   { path: 'guardacivil', component: TablaGuardiaComponent },
//   { path: 'plazabase/tabla-pb', component: TablaPbComponent },
//   { path: 'movil/card-confirmacion-transito', component: CardConfirmacionTransitoComponent }

// ];
// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'embarcacion/embarcaciones', component: EmbarcacionesComponent },
//   { path: 'transito/tabla-transito', component: TablaTransitoComponent },
//   { path: 'plazabase/formulario', component: FormularioPbComponent },
//   { path: 'notificaciones', component: NotificacionesComponent },
//   { path: 'movil/card-incidencia', component: CardIncidenciaComponent },
//   { path: 'guardacivil', redirectTo: 'guardia-civil/tabla-guardia', pathMatch: 'full' },
//   { path: 'plazabase', component: ContenidoPbComponent },
//   { path: 'movil/card-confirmacion-transito', component: CardConfirmacionTransitoComponent },
//   { path: 'guardacivil', component: TablaGuardiaComponent },
//   { path: 'plazabase/tabla-pb', component: TablaPbComponent },
//   { path: 'movil/card-confirmacion-transito', component: CardConfirmacionTransitoComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir la raíz a la página de inicio de sesión
//   { path: '**', redirectTo: '/login' } // Redirigir rutas no reconocidas a la página de inicio de sesión
// ];

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir la raíz a la página de inicio de sesión
//   { path: 'login', component: LoginComponent },
//   // Otras rutas principales si las hay
//   { path: '**', redirectTo: '/login' } // Redirigir rutas no reconocidas a la página de inicio de sesión
// ];

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir la raíz a la página de inicio de sesión
//   { path: 'login', component: LoginComponent },
//   {
//     path: 'home', component: ContenidoComponent, children: [
//       { path: 'dashboard', component: DashboardComponent },
//     ]
//   },
//   {
//     path: 'embarcaciones', component: EmbarcacionesComponent, children: [
//       { path: 'tabla', component: TablaComponent },
//       { path: 'formulario', component: FormularioEmbarcacionComponent },
//       { path: '', redirectTo: 'tabla', pathMatch: 'full' },
//     ]
//   },
//   {
//     path: 'plazabase', component: ContenidoPbComponent, children: [
//       { path: 'tabla', component: TablaPbComponent },
//       { path: 'formulario', component: FormularioPbComponent },
//       { path: '', redirectTo: 'tabla', pathMatch: 'full' },
//     ]
//   },
//   {
//     path: 'transito', component: ContenidoTransitoComponent, children: [
//       { path: 'tabla', component: TablaTransitoComponent },
//       { path: 'formulario', component: FormularioTransitoComponent },
//       { path: '', redirectTo: 'tabla', pathMatch: 'full' },
//     ]
//   },
//   // Otras rutas principales si las hay
//   { path: '**', redirectTo: '/login' } // Redirigir rutas no reconocidas a la página de inicio de sesión
// ];
// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/login',
//     pathMatch: 'full'
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'home',
//     component: ContenidoComponent,
//     children: [
//       {
//         path: 'dashboard',
//         component: DashboardComponent
//       },
//       {
//         path: 'embarcaciones',
//         component: EmbarcacionesComponent,
//         children: [
//           {
//             path: 'tabla',
//             component: TablaComponent
//           },
//           {
//             path: 'formulario',
//             component: FormularioEmbarcacionComponent
//           },
//           {
//             path: '',
//             redirectTo: 'tabla',
//             pathMatch: 'full'
//           },
//         ]
//       },
//       {
//         path: 'plazabase',
//         component: ContenidoPbComponent,
//         children: [
//           {
//             path: 'tabla',
//             component: TablaPbComponent
//           },
//           {
//             path: 'formulario',
//             component: FormularioPbComponent
//           },
//           {
//             path: '',
//             redirectTo: 'tabla',
//             pathMatch: 'full'
//           },
//         ]
//       },
//       {
//         path: 'transito',
//         component: ContenidoTransitoComponent,
//         children: [
//           {
//             path: 'tabla',
//             component: TablaTransitoComponent
//           },
//           {
//             path: 'formulario',
//             component: FormularioTransitoComponent
//           },
//           {
//             path: '',
//             redirectTo: 'tabla',
//             pathMatch: 'full'
//           },
//         ]
//       }
//     ]
//   },
//   {
//     path: '**',
//     redirectTo: '/login'
//   }
// ];
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
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'embarcaciones',
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
    path: '**',
    redirectTo: '/login'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

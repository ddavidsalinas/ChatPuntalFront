import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
//import { PlantillasComponent } from './plantillas/plantillas.component';


import { BotonComponent } from './boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
   // PlantillasComponent,
    BotonComponent,

  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

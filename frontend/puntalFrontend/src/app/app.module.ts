import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BootstrapComponent } from './bootstrap/bootstrap.component';

import { PlantillasComponent } from './plantillas/plantillas.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  
  declarations: [
    AppComponent,
   
    BootstrapComponent,

    PlantillasComponent,
    FormularioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

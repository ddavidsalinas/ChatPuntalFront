import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { CardMovilComponent } from './card-movil/card-movil.component';
import { PlantillaMovilComponent } from './plantilla-movil/plantilla-movil.component';
import { CardVistaTransitoComponent } from './card-vista-transito/card-vista-transito.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantillasComponent,
    CardMovilComponent,
    PlantillaMovilComponent,
    CardVistaTransitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

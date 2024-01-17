import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { CardMovilComponent } from './card-movil/card-movil.component';
import { PlantillaMovilComponent } from './plantilla-movil/plantilla-movil.component';
import { CardVistaTransitoComponent } from './card-vista-transito/card-vista-transito.component';
import { MovilModule } from './movil/movil.module';

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
    AppRoutingModule,
    MovilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { MovilModule } from './movil/movil.module';

@NgModule({
  declarations: [
    AppComponent,
    PlantillasComponent,
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

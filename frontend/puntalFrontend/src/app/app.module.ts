import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PlantillaModule } from './plantilla/plantilla.module';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  declarations: [AppComponent, BotonComponent],
  imports: [BrowserModule, DashboardModule, AppRoutingModule, PlantillaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

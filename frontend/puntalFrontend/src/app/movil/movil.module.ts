import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantillaGuardamuellesComponent } from './plantilla-guardamuelles/plantilla-guardamuelles.component';
import { CardTransitoComponent } from './card-transito/card-transito.component';
import { CardConfirmacionTransitoComponent } from './card-confirmacion-transito/card-confirmacion-transito.component';



@NgModule({
  declarations: [
    PlantillaGuardamuellesComponent,
    CardTransitoComponent,
    CardConfirmacionTransitoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PlantillaGuardamuellesComponent

  ]
})
export class MovilModule { }

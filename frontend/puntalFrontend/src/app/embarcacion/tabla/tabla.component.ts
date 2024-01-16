import { Component } from '@angular/core';
import { datos } from 'src/resources/datos';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  datos = datos.embarcaciones;
  constructor() { 
    console.log(this.datos);
  }

}

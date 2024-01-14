import { Component } from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent {
  handleButtonClick(buttonType: string) {
    console.log(`Se hizo clic en el botón ${buttonType} desde el componente padre.`);
   
  }
}

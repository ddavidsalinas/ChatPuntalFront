import { Component } from '@angular/core';

@Component({
  selector: 'app-embarcaciones',
  templateUrl: './embarcaciones.component.html',
  styleUrls: ['./embarcaciones.component.css']
})
export class EmbarcacionesComponent {
mostrarTabla = true;

  constructor() { }

  mostrarFormulario() {
    this.mostrarTabla = false;
  }


}

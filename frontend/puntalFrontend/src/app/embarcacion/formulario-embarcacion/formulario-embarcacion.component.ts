import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-formulario-embarcacion',
  templateUrl: './formulario-embarcacion.component.html',
  styleUrls: ['./formulario-embarcacion.component.css']
})
export class FormularioEmbarcacionComponent implements OnInit {
  embarcacionSeleccionada: any;
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    console.log("Intentando obtener datos del servicio...");
    this.sharedDataService.getData("embarcacionSeleccionada").subscribe(data => {
      console.log("Datos obtenidos del servicio:", data);
      if (data) {
        this.embarcacionSeleccionada = data;
        this.mostrarInformacion();
      }else{
        console.warn("No se obtuvieron datos del servicio");
      }
    });
  }
  mostrarInformacion() {
    console.log("Información de la embarcación seleccionada:", this.embarcacionSeleccionada);
  }

}

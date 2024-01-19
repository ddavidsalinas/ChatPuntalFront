import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-embarcacion',
  templateUrl: './formulario-embarcacion.component.html',
  styleUrls: ['./formulario-embarcacion.component.css']
})
export class FormularioEmbarcacionComponent implements OnInit {
  mostrarVacio: boolean = false;
  embarcacionSeleccionada: any = {datos_tecnicos: ''};
  data: any;
  constructor(private sharedDataService: SharedDataService, private activatedRoute: ActivatedRoute) { }
  onMostrarFormulario(tipo: string) {
    console.log("onMostrarFormulario:", tipo);
    if (tipo == 'vacio') {
      this.mostrarVacio = true;
    } else {
      this.mostrarVacio = false;
    }
    
  }
  ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
      const tipo = params['tipo'];

      // Asigna el valor al booleano
      this.mostrarVacio = tipo === 'vacio';
    });
    console.log("Intentando obtener datos del servicio...");
    this.sharedDataService.getData("embarcacionSeleccionada").subscribe(data => {
      console.log("Datos obtenidos del servicio:", data);
      if (data) {
        this.embarcacionSeleccionada = data;
        console.log("Información de la embarcación seleccionada:", this.embarcacionSeleccionada.matricula);
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

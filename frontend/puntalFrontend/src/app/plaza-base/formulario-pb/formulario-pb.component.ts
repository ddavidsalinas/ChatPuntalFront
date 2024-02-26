import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormdialogoPbComponent } from '../formdialogo-pb/formdialogo-pb.component';
import { DialogoFormpb } from '../dialogo-formpb';
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-pb',
  templateUrl: './formulario-pb.component.html',
  styleUrls: ['./formulario-pb.component.css'],
})
export class FormularioPbComponent implements OnInit {
  mostrarVacio: boolean = false;
  modoVista: boolean = true;
  modoEdicion: boolean = false;
  plazaBSeleccionada: any = { datos_estancia: '' };
  imagenSeleccionada: string | ArrayBuffer | null = null;
  data: any;
  formulario!: FormGroup;

  instalaciones: any[] = [];
  pantalanes: any[] = [];
  amarres: any[] = [];
  embarcaciones: any[] = [];
  selectedEmbarcacion: any;
  selectedInstalacion: any;
  selectedPantalan: any;
  selectedAmarre: any;
  fechaInicio: Date;
  fechaFinalizacion: Date;
  titular: string= '';
  
  constructor(
    private sharedDataService: SharedDataService,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router


    
  ) {
    
     this.fechaInicio = new Date();
  
     this.fechaFinalizacion = new Date();
     this.fechaFinalizacion.setMonth(this.fechaInicio.getMonth() + 6);
  }
  validarFechaFinalizacion() {
    // Calcular la fecha mínima permitida como 6 meses después de la fecha de inicio
    const fechaMinima = new Date(this.fechaInicio);
    console.log(fechaMinima);
    fechaMinima.setMonth(fechaMinima.getMonth() + 6);

    // Comparar la fecha de finalización con la fecha mínima permitida
    if (this.fechaFinalizacion < fechaMinima) {
      console.log(this.fechaFinalizacion);
      // Si la fecha de finalización es anterior a la fecha mínima permitida, establecerla como la fecha mínima
      this.fechaFinalizacion = new Date(fechaMinima);
      console.log(this.fechaFinalizacion);
    }
  }

  onChangeInstalacion() {
    this.apiService.getPantalanes(this.selectedInstalacion).subscribe(pantalanes => {
      this.pantalanes = pantalanes;
    });
  }
  
  onChangePantalan() {
    this.apiService.getAmarres(this.selectedPantalan).subscribe(amarres => {
      this.amarres = amarres;
    });
  
}  
onChangeEmbarcacion() {
 
  const embarcacionSeleccionada = this.embarcaciones.find(embarcacion => embarcacion.id === this.selectedEmbarcacion);
  console.log(embarcacionSeleccionada);
  console.log(this.embarcaciones);
  console.log(this.selectedEmbarcacion.id);
  console.log(this.selectedEmbarcacion);





  if (this.selectedEmbarcacion) {
  console.log(this.selectedEmbarcacion)
    this.apiService.getTitularEmbarcacion(this.selectedEmbarcacion).subscribe(
     
      (response: any) => {
        console.log(response)
        console.log( this.selectedEmbarcacion)
        this.titular = response.titular;
        console.log( this.titular)
      },
      (error) => {
        console.error('Error al obtener el titular de la embarcación:', error);
        this.titular = ''; // Establecer el titular como vacío en caso de error
      }
    );
  } else {
    this.titular = ''; // Establecer el titular como vacío si no se encuentra la embarcación seleccionada
  }
}

  guardarPlazaBase() {}
  ngOnInit(): void {
    
    this.apiService.getInstalaciones().subscribe(instalaciones => {
      this.instalaciones = instalaciones;
    });

    this.apiService.getEmbarcaciones().subscribe(embarcaciones => {
      this.embarcaciones = embarcaciones;
      console.log(embarcaciones);
    });

  


    this.activatedRoute.queryParams.subscribe((params) => {
      const tipo = params['tipo'];
      this.mostrarVacio = tipo === 'vacio';
      this.modoEdicion = !this.mostrarVacio;
      console.log(tipo);
    });

    console.log('Intentando obtener datos del servicio...');

    this.sharedDataService.getData('plazaBSeleccionada').subscribe((data) => {
      console.log('Datos obtenidos del servicio:', data);
      if (data) {
        if (!this.mostrarVacio) {
          this.plazaBSeleccionada = data;
          console.log(
            'Información de la embarcación seleccionada:',
            this.plazaBSeleccionada.titular
          );
        }
      } else {
        console.warn('No se obtuvieron datos del servicio');
      }
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenSeleccionada = reader.result;
        console.log('Imagen seleccionada:', this.imagenSeleccionada);
      };
      reader.readAsDataURL(file);
    }
  }

  activarModoEdicion() {
    this.modoVista = false;
  }
  eliminar(): void {
    const dialogRef = this.dialog.open(FormdialogoPbComponent, {
      data: {
        embarcacion: this.plazaBSeleccionada.embarcacion,
        instalacion: this.plazaBSeleccionada.instalacion,
        titular: this.plazaBSeleccionada.titular,
        pantalan: this.plazaBSeleccionada.pantalan,
      } as DialogoFormpb,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Eliminación confirmada. Causa de baja:', result.causa);
      } else {
        console.log('Eliminación cancelada.');
      }
    });
  }
}

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
  editarFechaFinalizacion: boolean = false;



  plazaBSeleccionada: any = { datos_estancia: '' };
  idLocalStorage: any;
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
  FechaInicio: Date;
  FechaFinalizacion: Date;
  titular: string= '';
  
  constructor(
    private sharedDataService: SharedDataService,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
    
  ) {
    this.formulario = this.formBuilder.group({
      FechaInicio: ['', Validators.required],
      FechaFinalizacion: [''],
      Instalacion: [''],
      Pantalan: [''],
      Amarre: [''],
      Embarcacion: [''],
      Titular: [''],
  
    });
     this.FechaInicio = new Date();
     this.idLocalStorage = localStorage.getItem('id');
     this.FechaFinalizacion = new Date();
     this.FechaFinalizacion.setMonth(this.FechaInicio.getMonth() + 6);
  }
  onChangeFechaInicio(): void {
    // Obtener la fecha de inicio
    const FechaInicio = new Date(this.FechaInicio);
  
    // Calcular la fecha de finalización sumando 6 meses a la fecha de inicio
    const FechaFinalizacion = new Date(FechaInicio);
    FechaFinalizacion.setMonth(FechaFinalizacion.getMonth() + 6);
  
    // Asignar la nueva fecha de finalización
    this.FechaFinalizacion = FechaFinalizacion;
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
 
this.embarcaciones.find(embarcacion => embarcacion.id === this.selectedEmbarcacion);

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
validarFechaFinalizacion() {
  // Calcular la fecha mínima permitida como 6 meses después de la fecha de inicio
  const fechaMinima = new Date(this.FechaInicio);
  fechaMinima.setMonth(fechaMinima.getMonth() + 6);

  // Establecer la fecha de finalización como la fecha mínima calculada
  this.FechaFinalizacion = fechaMinima;
}
  guardarPlazaBase() {
    const Administrativo_id = (document.getElementById('campoOculto') as HTMLInputElement).value;

  const formulario = document.forms.namedItem("formPlazabase") as HTMLFormElement;
  const formData = new FormData();

  formData.append('FechaInicio', formulario['FechaInicio'].value);
  formData.append('FechaFinalizacion', formulario['FechaFinalizacion'].value);
  formData.append('Instalacion', formulario['Instalacion'].value);
  formData.append('Pantalan', formulario['Pantalan'].value);
  formData.append('Amarre', formulario['Amarre'].value);
  formData.append('Embarcacion', formulario['Embarcacion'].value);
  formData.append('Titular', formulario['Titular'].value);
  formData.append('Administrativo_id', Administrativo_id);
console.log(formData);

const idAmarre = formData.get('Amarre');

console.log(idAmarre);

this.apiService.postAlquiler(idAmarre, formData).subscribe(
  (response) => {
    console.log('Alquiler?:', response);
    
    // Después de que se complete la primera solicitud, 
    // se realiza la segunda solicitud
    this.apiService.postAdministrativoAmarre(idAmarre, formData).subscribe(
      (response) => {
        console.log('Administrativo asociado correctamente al amarre:', response);
        
        // Después de que se complete la segunda solicitud,
        // se realiza la tercera solicitud
        this.apiService.putDisponibleOcupado(idAmarre).subscribe(
          (response) => {
            console.log('Cambiado:', response);
            this.router.navigate(['/tabla-pb']);
          },
          (error) => {
            console.error('Error al cambiado:', error);
          }
        );
      },
      (error) => {
        console.error('Error al asociar el administrativo al amarre:', error);
      }
    );
  },
  (error) => {
    console.error('Error al Alquiler?:', error);
  }
);




    }

actualizaPB(){}

bajaPB(){}




  ngOnInit(): void {
    
    this.apiService.getInstalaciones().subscribe(instalaciones => {
      this.instalaciones = instalaciones;
    });

    this.apiService.getEmbarcaciones().subscribe(embarcaciones => {
      this.embarcaciones = embarcaciones;
      console.log(embarcaciones);
    });
    this.validarFechaFinalizacion();

    this.activatedRoute.queryParams.subscribe((params) => {
      const tipo = params['tipo'];
      this.mostrarVacio = tipo === 'vacio';
      //this.modoEdicion = !this.mostrarVacio;
     // console.log(tipo);
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

 
  activarModoEdicion() {
    this.modoVista = false;
    this.editarFechaFinalizacion = true;
    this.modoEdicion = true;
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

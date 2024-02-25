import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { catchError } from 'rxjs';
import { error } from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-incidencia',
  templateUrl: './card-incidencia.component.html',
  styleUrls: ['./card-incidencia.component.css']
})
export class CardIncidenciaComponent {

  incidencia: any = { datos_tecnicos: '' };
  formulario: FormGroup;  


  constructor(
    private sharedDataService: SharedDataService,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      Titulo: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Imagen: ['']
    });
  }
  
  guardarIncidencia() {
    console.log('Guardando incidencia:', this.incidencia);

    // Crear un nuevo objeto FormData para enviar los datos al servidor
    const formData = new FormData();

    // Agregar título y descripción al objeto FormData
    formData.append('Titulo', this.incidencia.Titulo);
    formData.append('Descripcion', this.incidencia.Descripcion);

    // Agregar la imagen seleccionada al objeto FormData
    // const imagenInput = document.getElementById('imagenIncidencia') as HTMLInputElement;
    // if (imagenInput && imagenInput.files && imagenInput.files.length > 0) {
    //   const file = imagenInput.files[0];
    //   formData.append('Imagen', file);
    // }

    // Envía los datos al servidor utilizando el servicio API
    this.apiService.add('incidencia', formData)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud:', error);
          console.log('Mensaje de error:', error.error);
          throw error;
        })
      )
      .subscribe(
        response => {
          this.router.navigate(['/incidencias']);
          console.log('Respuesta del servicio en el componente:', response);
        }
      );
  }
  
}

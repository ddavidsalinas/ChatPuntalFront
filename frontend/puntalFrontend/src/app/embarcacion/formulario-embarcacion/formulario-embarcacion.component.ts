import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogoFormem } from '../dialogo-formem';
import { FormBuilder } from '@angular/forms';
import { FormdialogoemComponent } from '../formdialogoem/formdialogoem.component';
import { ApiService } from 'src/app/services/api/api.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-embarcacion',
  templateUrl: './formulario-embarcacion.component.html',
  styleUrls: ['./formulario-embarcacion.component.css']
})
export class FormularioEmbarcacionComponent implements OnInit {
  mostrarVacio: boolean = false;
  modoVista: boolean = true;
  modoEdicion: boolean = false;
  embarcacionSeleccionada: any = { datos_tecnicos: '' };
  data: any;

  imagenSeleccionada: string | File | ArrayBuffer | null = null;


  constructor(private sharedDataService: SharedDataService, private activatedRoute: ActivatedRoute, private apiService: ApiService, private formBuilder: FormBuilder, public dialog: MatDialog, private router: Router) {}

  onMostrarFormulario(tipo: string) {
   
    if (tipo == 'vacio') {
      this.mostrarVacio = true;
    } else {
      this.mostrarVacio = false;
    }

  }
  mostrar: string = 'no';
  noMostrar: string = 'si';
  click: boolean = true;
  noClick: boolean = false;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const tipo = params['tipo'];
      this.mostrarVacio = tipo === 'vacio';

    });



    this.sharedDataService.getData("embarcacionSeleccionada").subscribe(data => {
     
      if (data) {
        // Solo asigna a embarcacionSeleccionada si no es un formulario vacío
        if (!this.mostrarVacio) {
          this.embarcacionSeleccionada = data;

        }
      } else {
        console.warn("No se obtuvieron datos del servicio");
      }
    });


  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenSeleccionada = reader.result;
      
      };
      reader.readAsDataURL(file);
    }
  }
  onFileUpdated(event: any) {
    this.imagenSeleccionada = event.target.files[0];
  
  }

  activarModoEdicion() {

    this.modoVista = false;
    this.modoEdicion = true;
  }


  guardarEmbarcacion() {
 
    const formulario = document.forms.namedItem("formEmbarcacion") as HTMLFormElement;
    const formData = new FormData(); // Crea un objeto FormData para enviar los datos al servidor

    // Accede a los valores del formulario y agrégalos al objeto FormData
    formData.append('Nombre', formulario['Nombre'].value);
    formData.append('Matricula', formulario['Matricula'].value);
    formData.append('Manga', formulario['Manga'].value);
    formData.append('Eslora', formulario['Eslora'].value);
    formData.append('Origen', formulario['Origen'].value);
    formData.append('Titular', formulario['Titular'].value);
    formData.append('Numero_registro', formulario['Numero_registro'].value);
    formData.append('Datos_Tecnicos', formulario['Datos_Tecnicos'].value);
    formData.append('Modelo', formulario['Modelo'].value);
    formData.append('Tipo', formulario['Tipo'].value);

    // Agrega la imagen seleccionada al objeto FormData
    const imagenInput = formulario['Imagen'] as HTMLInputElement;
    if (imagenInput && imagenInput.files && imagenInput.files.length > 0) {
      const file = imagenInput.files[0];
      formData.append('Imagen', file);
    }

    // Envía los datos al servidor utilizando el servicio API
    this.apiService.add('embarcacion', formData)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud:', error);
          console.log('Mensaje de error:', error.error);
          throw error;
        })
      )
      .subscribe(
        response => {
          this.router.navigate(['/embarcaciones']);
          
        }
      );
  }


  actualizarEmbarcacion() {

    if (this.imagenSeleccionada) {

      this.embarcacionSeleccionada.Imagen = this.imagenSeleccionada;
    }
  
    this.apiService.update(this.embarcacionSeleccionada.id, 'embarcacion', this.embarcacionSeleccionada)
      .pipe(
        catchError(error => {
          console.error('Error en la solicitud:', error);
          // Puedes manejar el error según tus necesidades
          throw error; // Propagar el error después de manejarlo
        })
      )
      .subscribe(
        response => {
       
         
          this.embarcacionSeleccionada = {};
          this.router.navigate(['/embarcaciones']);
        },
        error => {
          console.error('Error en la solicitud:', error);
        }
      );
  }




  eliminar(): void {
    const dialogRef = this.dialog.open(FormdialogoemComponent, {
      data: {
        matricula: this.embarcacionSeleccionada.Matricula,



      } as DialogoFormem
    });

    dialogRef.afterClosed().subscribe(result => {
    
      if (result.causa) {
        this.apiService.delete(this.embarcacionSeleccionada.id, 'embarcacion')
          .pipe(
            catchError(error => {
              console.error('Error en la solicitud:', error);
              throw error;
            })
          )
          .subscribe(
            response => {
            
              this.embarcacionSeleccionada = {};
              this.router.navigate(['/embarcaciones']);

            },
            error => {
              console.error('Error en la solicitud:', error);
            }
          );
        console.log('Eliminación confirmada. Causa de baja:', result.causa);
      } else {

        console.log('Eliminación cancelada.');
      }
    });
  }

}




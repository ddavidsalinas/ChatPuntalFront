import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormdialogoPbComponent } from '../formdialogo-pb/formdialogo-pb.component';
import { DialogoFormpb } from '../dialogo-formpb';

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

  constructor(
    private sharedDataService: SharedDataService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    public dialog:MatDialog,
    

  ) {}

  ngOnInit(): void {
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
        
      } as DialogoFormpb
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       
        console.log('Eliminación confirmada. Causa de baja:', result.causa);
      } else {
        
        console.log('Eliminación cancelada.');
      }
    });
}
}

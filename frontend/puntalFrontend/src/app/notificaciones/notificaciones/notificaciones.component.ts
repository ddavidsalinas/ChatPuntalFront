import { Component, OnInit } from '@angular/core';
import { datos } from 'src/resources/datos';
import { ApiService } from 'src/app/services/api/api.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  // datos= datos.incidencias;
  datos: any = [];
  dtTrigger: Subject<any> = new Subject<any>();
  tituloModal: string = '';
  cuerpoModal: string = '';
  imagenModal: string = '';
  // rowEstado: HTMLElement = {} as HTMLElement;
  selectedItem: any;
  administrativoId:string | null = localStorage.getItem('id');
  constructor(private apiService: ApiService, private http: HttpClient) {
    
  }

  someClickHandler(index: number): void {
    const rowData = this.datos[index];
    this.selectedItem = rowData;
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
      this.tituloModal = rowData.Titulo;
      this.cuerpoModal = rowData.Descripcion;
      this.imagenModal = rowData.Foto;
      // this.rowEstado = row as HTMLElement;

    }
    // console.log(row);
  }

  closeModal(): void {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
      // this.rowEstado.style.opacity = '0.5';
    }
  }
  marcarLeido(id: string): void {
    this.apiService.update(this.selectedItem.id, 'incidencia', { Leido: 1, Administrativo_id: this.administrativoId }).subscribe((data: any) => {
      console.log('La incidencia se actualizó correctamente');
      this.closeModal();
    });
    
  }

  eliminarIncidencia(id: string): void {
    this.apiService.delete(this.selectedItem.id, 'incidencia')
      .subscribe(
        () => {
          console.log('La incidencia se eliminó correctamente');
     
        },
        error => {
          console.error('Error al eliminar la incidencia:', error);
        }
      );
        this.closeModal();
  }
  ngOnInit(): void {
    this.apiService.getAll('incidencia').subscribe((data: any) => {
      this.datos = data;
      this.dtTrigger.next(data);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },

      responsive: true,

    }
  }
  ngOnDestroy(): void {
    // Desuscribirse de dtTrigger para evitar problemas de memoria
    this.dtTrigger.unsubscribe();
  }
}

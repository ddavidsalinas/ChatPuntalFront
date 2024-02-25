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
datos : any = [];
dtTrigger: Subject<any> = new Subject<any>();
tituloModal: string = '';
cuerpoModal: string = '';
imagenModal: string = '';
rowEstado: HTMLElement = {} as HTMLElement;
constructor(private apiService: ApiService, private http: HttpClient) {
  console.log(this.datos);
}

someClickHandler(index: number): void {
  const rowData = this.datos[index];
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
  this.apiService.update('incidencia', id, {Leido: true}).subscribe((data: any) => {
    this.apiService.getAll('incidencia').subscribe((data: any) => {
      this.datos = data;
      this.dtTrigger.next(data);
    });
  });
  this.closeModal();
}
eliminarIncidencia(id: string): void {
  this.apiService.delete('incidencia', id).subscribe((data: any) => {
    this.apiService.getAll('incidencia').subscribe((data: any) => {
      this.datos = data;
      this.dtTrigger.next(data);
    });
  });
  this.closeModal();
}

ngOnInit() : void {
  this.apiService.getAll('incidencia').subscribe((data: any) => {
    this.datos = data;
    this.dtTrigger.next(data);
  });
this.dtOptions = {
  pagingType: 'full_numbers',
  pageLength: 10,
  processing: true,
  language:{
    url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
  },
  // rowCallback: (row: Node, data:  any[] | Object, index:number) => {
  //   const self = this;

  //   $('td', row).off('click');
  //   $('td', row).on('click', () => {
  //     self.someClickHandler(row, index);
  //   });
  //   return row;
  // },
  responsive: true,
}
}
}

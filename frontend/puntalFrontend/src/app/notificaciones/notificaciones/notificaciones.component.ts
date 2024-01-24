import { Component, OnInit } from '@angular/core';
import { datos } from 'src/resources/datos';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
dtOptions: DataTables.Settings = {};
datos= datos.incidencias;
constructor(){
  console.log(this.datos);
}

someClickHandler(row: Node): void {
  const modal = document.getElementById('myModal');
  if (modal) {
    modal.style.display = 'block';
  }
  console.log(row);
}

closeModal(): void {
  const modal = document.getElementById('myModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

ngOnInit() : void {
this.dtOptions = {
  pagingType: 'full_numbers',
  pageLength: 10,
  processing: true,
  language:{
    url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
  },
  rowCallback: (row: Node) => {
    const self = this;

    $('td', row).off('click');
    $('td', row).on('click', () => {
      self.someClickHandler(row);
    });
    return row;
  },
  responsive: true,
}
}
}

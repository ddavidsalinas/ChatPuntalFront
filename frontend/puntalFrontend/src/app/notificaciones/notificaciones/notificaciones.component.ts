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

ngOnInit() : void {
this.dtOptions = {
  pagingType: 'full_numbers',
  pageLength: 10,
  processing: true,
  language:{
    url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
  },
  responsive: true,
}
}
}

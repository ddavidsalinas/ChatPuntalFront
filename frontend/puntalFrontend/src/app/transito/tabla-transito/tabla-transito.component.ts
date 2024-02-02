import { Component,OnInit } from '@angular/core';
import { datos } from 'src/resources/datos';

@Component({
  selector: 'app-tabla-transito',
  templateUrl: './tabla-transito.component.html',
  styleUrls: ['./tabla-transito.component.css']
})
export class TablaTransitoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  datos = datos.transitos;

  
  ngOnInit(): void {
    console.log(this.datos);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
       // url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/ko.json',
      },
    };
  }
  
}

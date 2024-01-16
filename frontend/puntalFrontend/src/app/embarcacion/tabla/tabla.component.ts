import { Component, OnInit } from '@angular/core';
import { datos } from 'src/resources/datos';
// import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  datos = datos.embarcaciones;
  constructor() { 
    console.log(this.datos);
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      }
    }
  }

}

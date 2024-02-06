import { Component,OnInit } from '@angular/core';
import { datos } from 'src/resources/datos';
//import { TablaPbComponent } from '../tabla-pb/tabla-pb.component';

@Component({
  selector: 'app-tabla-pb',
  templateUrl: './tabla-pb.component.html',
  styleUrls: ['./tabla-pb.component.css']
})
export class ContenidoPbComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  datos = datos.plazaBase;

  
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

import { Component,OnInit, Output,EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-tabla-guardia',
  templateUrl: './tabla-guardia.component.html',
  styleUrls: ['./tabla-guardia.component.css']
})
export class TablaGuardiaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  datos: any = [];
   totalRegistros:any;

  seleccionados: boolean[] = Array(this.datos.length).fill(false);
  selectAll: boolean = false;
  marcar(index: number)
  {
    this.seleccionados[index] = !this.seleccionados[index];
  }

 seleccionarTodas(): void {
  this.selectAll = !this.selectAll;
  this.seleccionados.fill(this.selectAll);
}
dtTrigger: Subject<any> = new Subject<any>();

constructor(private apiService:ApiService ) { 
  console.log(this.datos);
}

ngOnInit(): void {
  this.apiService.getAll('transito').subscribe((data: any) => {
    this.datos = data;
    console.log('Después de la llamada a la API:', this.datos);
    this.dtTrigger.next(data); 


     });
     this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },
 
  };
}
}


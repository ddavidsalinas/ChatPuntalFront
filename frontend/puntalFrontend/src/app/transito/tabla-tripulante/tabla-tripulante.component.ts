import { Component ,Input,OnInit,EventEmitter, Output} from '@angular/core';
import { datos } from 'src/resources/datos';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { NgModule } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-tabla-tripulante',
  templateUrl: './tabla-tripulante.component.html',
  styleUrls: ['./tabla-tripulante.component.css'],
  
})
export class TablaTripulanteComponent implements OnInit{
  dtOptions: DataTables.Settings = {};
  datos : any=[];
  dtTrigger: Subject<any> = new Subject<any>();
constructor(
  private apiService: ApiService,
    private http: HttpClient
) { 
  console.log(this.datos);

}
 
TripulanteSeleccionada: any = { datos_tecnicos: '' };
mostrarDatos:boolean =true;
@Input() mostrar:string='';
@Input() click:boolean=false;
crearTripulante :boolean=false;

//activa edicion tabla tripulante
anyadirTripulante()
{
  this.crearTripulante=true;
}
ngOnInit(): void {
  this.apiService.getAll('tripulante').subscribe((data: any) => {
    this.datos = data;
    
    console.log('Después de la llamada a la API:', this.datos);
    // Notificar a DataTables después de obtener los datos
    // this.dtTrigger.next(data);
  });
  if(this.mostrar=='si')
  {
    this.mostrarDatos=true;
  }
 else
 {
  this.mostrarDatos=false;
 }
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true,
    language: {
      url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
    },
  };
}
}

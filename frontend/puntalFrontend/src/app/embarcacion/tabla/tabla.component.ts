import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api/api.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  datos: any = [];
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedDataService: SharedDataService,
    private apiService: ApiService,
    private http: HttpClient
  ) {

  }
  navegarAFormulario() {


    this.router.navigate(['../formulario'], { relativeTo: this.activatedRoute, queryParams: { tipo: 'vacio' } })
  }



  someClickHandler(index: number): void {

    const rowData = this.datos[index];
    console.log(rowData);
    this.sharedDataService.setData("embarcacionSeleccionada", rowData);
    this.router.navigate(['/embarcaciones/formulario'], {
      queryParams: { tipo: 'vista' }  // O 'vacio' según tus necesidades
    }); // Si no es con ruta abosulta, no funciona

  }

  ngOnInit(): void {
    this.apiService.getAll('embarcacion').subscribe((data: any) => {
      this.datos = data;

      console.log('Después de la llamada a la API:', this.datos);
      this.dtTrigger.next(data);
      // Notificar a DataTables después de obtener los datos

    });
    // Configuración de DataTables
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      },

    };



  }
  ngOnDestroy(): void {
    // Limpia el dtTrigger para evitar problemas de memoria
    this.dtTrigger.unsubscribe();
  }
}




import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api/api.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-lista-cards',
  templateUrl: './lista-cards.component.html',
  styleUrls: ['./lista-cards.component.css']
})
export class ListaCardsComponent {

  datos: any = [];
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedDataService: SharedDataService,
    private apiService: ApiService,
    private http: HttpClient
  ) {
    console.log(this.datos);
  }

  ngOnInit(): void {
    this.apiService.getAll('transito').subscribe((data: any) => {
      this.datos = data.transitodetalles;

      console.log('Después de la llamada a la API:', this.datos);
      this.dtTrigger.next(data); 
      // Notificar a DataTables después de obtener los datos
      // this.dtTrigger.next(data);
    });
  }

  verTransito(transito: any) {
    // Navegar a la ruta 'card-confirmacion-transito' con los datos del transito como parámetros de ruta
    this.router.navigate(['movil/card-confirmacion-transito'], { state: { transito } });
  }


}

import { Component, OnInit } from '@angular/core';
import { LocalizacionService } from 'src/app/services/contexto/localizacion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor (private LocalizacionService: LocalizacionService){}
  texto1: string = 'Número total de plazas base:';
  texto2: string = 'Texto de la tarjeta 2';
  texto3: string = 'Texto de la tarjeta 3';
  texto4: string = 'Texto de la tarjeta 4';
  texto5: string = 'Texto de la tarjeta 5';
  texto6: string = 'Texto de la tarjeta 6';
  titulo: string = 'Titulo de la tarjeta';
  titulo1: string = 'estoy aqui';
  comprueba: string = 'Comprueba de la tarjeta ';
  prueba: string = 'Comprueba de la tarjeta';
  ngOnInit(): void{
    this.LocalizacionService.estoyAqui =true;
  }
}
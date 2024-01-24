import { Component , OnInit} from '@angular/core';
import { LocalizacionService } from 'src/app/services/contexto/localizacion.service';


@Component({
  selector: 'app-tabla-transito',
  templateUrl: './tabla-transito.component.html',
  styleUrls: ['./tabla-transito.component.css']
})
export class TablaTransitoComponent {
  constructor (private LocalizacionService: LocalizacionService){}
  ngOnInit(): void{
    this.LocalizacionService.estoyAqui =true;
  }
}

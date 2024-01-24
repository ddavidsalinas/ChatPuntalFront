import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalizacionService } from 'src/app/services/contexto/localizacion.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  @Input() label: string = ' ';
  @Input() route: string = '/';
  @Input() clase: string = 'botonA';
  @Input() imageUrl: string | undefined;

  constructor(private router: Router, private LocalizacionService: LocalizacionService) {}

  navigate(): void {
    this.router.navigate([this.route]);
  }

getLugar(): string {
  return this.LocalizacionService.
}

}

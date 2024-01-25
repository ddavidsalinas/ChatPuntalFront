import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contenido-transito',
  templateUrl: './contenido-transito.component.html',
  styleUrls: ['./contenido-transito.component.css']
})
export class ContenidoTransitoComponent {
  constructor(private route: ActivatedRoute) { }
}

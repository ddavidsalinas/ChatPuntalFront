import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  @Input() label: string = 'Default Label';
  @Input() route: string = '/';
  @Input() imageUrl: string | undefined;

  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigate([this.route]);
  }
}

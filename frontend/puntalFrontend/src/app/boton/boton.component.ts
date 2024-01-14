import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  @Output() buttonClick = new EventEmitter<void>();
  isActive: boolean = false;

  toggleButton() {
    this.isActive = !this.isActive;
    this.buttonClick.emit();
  }
}

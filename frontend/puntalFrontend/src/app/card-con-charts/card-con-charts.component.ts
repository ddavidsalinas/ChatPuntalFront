import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-con-charts',
  templateUrl: './card-con-charts.component.html',
  styleUrls: ['./card-con-charts.component.css']
})
export class CardConChartsComponent {
  @Input() texto: string = '';
}

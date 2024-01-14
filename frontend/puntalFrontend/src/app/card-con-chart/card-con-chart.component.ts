import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-con-chart',
  templateUrl: './card-con-chart.component.html',
  styleUrls: ['./card-con-chart.component.css']
})
export class CardConChartComponent {
  @Input() texto: string = '';
}
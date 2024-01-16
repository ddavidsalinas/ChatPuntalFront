import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cardconchart',
  templateUrl: './cardconchart.component.html',
  styleUrls: ['./cardconchart.component.css']
})
export class CardconchartComponent {
  @Input() texto: string = '';
  @Input() titulo: string = '';
  @Input() chartType: string=''; 
  get esBarChart(): boolean {
    console.log('Chart Type:', this.chartType);
    return this.chartType === 'bar';
  }
  get esPieChart(): boolean {
    console.log('Chart Type:', this.chartType);
    return this.chartType === 'pie';
  }
  get esRadarChart(): boolean {
    console.log('Chart Type:', this.chartType);
    return this.chartType === 'radar';
  }
  get espolarAreaChart(): boolean {
    console.log('Chart Type:', this.chartType);
    return this.chartType === 'polarArea';
  }
  get esBubbleChart(): boolean {
    console.log('Chart Type:', this.chartType);
    return this.chartType === 'bubble';
  }
  get esLineChart(): boolean {
    console.log('Chart Type:', this.chartType);
    return this.chartType === 'line';
  }
}

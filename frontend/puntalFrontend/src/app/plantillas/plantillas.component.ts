import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent {

  @Input() nombre: string = "";
  anyadir: string = "wer";
  inputsEmbarcacion: any[] = [
    { id: 1, label: 'Nombre', type: 'text' },
    { id: 2, label: 'Matricula', type: 'text' },
    { id: 3, label: 'Modelo', type: 'text' },
    { id: 4, label: 'Bandera', type: 'text' },
    { id: 5, label: 'Titular', type: 'text' },
    { id: 6, label: 'Eslora', type: 'number' },
    { id: 7, label: 'Manga', type: 'number' },
    { id: 8, label: 'Numero Registro', type: 'number' },
    { id: 9, label: 'Tipo', type: 'text' },
    { id: 10, label: 'Datos técnicos', type: 'text' },
  ];
  datostecnicos: string = "ads";

};
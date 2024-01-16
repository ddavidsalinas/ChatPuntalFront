import { Component, Input ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent 
{
  
  @Input() input:any[]=[];
  @Input() boton:string="";
  @Input() texto:string="";
 
  // inputsTransito =[
  //   {id:1,label:'Fecha entrada',type:'date'},
  //   {id:2,label:'Fecha salida',type:'date'},
  //   {id:3,label:'Embarcacion',type:'text'},
  //   {id:4,label:'Instalacion',type:'text'},
  //   {id:5,label:'Pantalán',type:'text'},
  //   {id:6,label:'Amarre',type:'text'},
  //   {id:7,label:'Proposito',type:'text'},
  //   {id:8,label:'Autorizaciones',type:'check'},
  //   {id:9,label:'Patron',type:'text'},
  //   {id:10,label:'Datos estancia',type:'text'},
  // ];
  // inputsPlazaBase =[
  //   {id:1,label:'Fecha entrada',type:'text'},
  //   {id:2,label:'Embarcacion',type:'text'},
  //   {id:3,label:'Instalación',type:'text'},
  //   {id:4,label:'Pantalán',type:'text'},
  //   {id:5,label:'Amarre',type:'text'},
  //   {id:6,label:'Autorizacione',type:'check'},
  //   {id:7,label:'Titular',type:'text'},
  //   {id:8,label:'Datos estancia',type:'text'},
  
  // ];
  
  
}

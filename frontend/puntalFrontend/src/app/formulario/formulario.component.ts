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
  @Input() nombre:string="";
 
 
  
  
  
}

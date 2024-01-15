import { Component, Input ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit
{
  @Input() cantidadInputs:number =0;
  formulario: FormGroup | undefined;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.crearInputs();
  }
  crearInputs()
  {
    const campos: { [key: string]: any } = {};
    for(let i=0;i<this.cantidadInputs;i++)
    {
      campos[`input${i + 1}`] = ['', Validators.required];
    }
    this.formulario=this.formBuilder.group(campos);
  }
  
}

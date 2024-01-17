import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { datos } from 'src/resources/datos';
import { Router, ActivatedRoute } from '@angular/router';
// import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Output() mostrarFormulario = new EventEmitter();

  navegarAFormulario() {
    // console.log("navegarAFormulario");
    // this.mostrarFormulario.emit();
    this.router.navigate(['../formulario'], {relativeTo: this.activatedRoute})
  }
  dtOptions: DataTables.Settings = {};
  datos = datos.embarcaciones;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    console.log(this.datos);
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json'
      }
    }
  }

}

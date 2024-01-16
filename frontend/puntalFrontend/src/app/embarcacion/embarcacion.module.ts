import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [
    TablaComponent
  ]
})
export class EmbarcacionModule { }

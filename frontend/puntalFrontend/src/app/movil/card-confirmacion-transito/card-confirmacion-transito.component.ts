
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-confirmacion-transito',
  templateUrl: './card-confirmacion-transito.component.html',
  styleUrls: ['./card-confirmacion-transito.component.css']
})

export class CardConfirmacionTransitoComponent implements OnInit {

  transito: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.transito = history.state.transito;
  }

}

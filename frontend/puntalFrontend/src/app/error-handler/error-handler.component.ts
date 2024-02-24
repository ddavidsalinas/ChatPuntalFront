import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent {
  errorCode: number | null = null;
  errorMessage: string | null = null;

  constructor(private location: Location) { }

  

  goBack(): void {
    this.location.back();
  }

}

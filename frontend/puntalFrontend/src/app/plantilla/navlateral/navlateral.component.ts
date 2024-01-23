import { Component } from '@angular/core';

@Component({
  selector: 'app-navlateral',
  templateUrl: './navlateral.component.html',
  styleUrls: ['./navlateral.component.css'],
})
export class NavlateralComponent {
  dashboardRoute: string = '/dashboard/dashboard';
  transitosRoute: string = '/transito/contenido-transito';
  embarcacionRoute: string = '/embarcacion/embarcaciones';
}

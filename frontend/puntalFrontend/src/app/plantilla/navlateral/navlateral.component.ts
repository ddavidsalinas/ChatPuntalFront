import { Component } from '@angular/core';

@Component({
  selector: 'app-navlateral',
  templateUrl: './navlateral.component.html',
  styleUrls: ['./navlateral.component.css'],
})
export class NavlateralComponent {
  dashboardRoute: string = '/dashboard';
  transitosRoute: string = '/transitos';
  embarcacionRoute: string = '/embarcaciones';
}

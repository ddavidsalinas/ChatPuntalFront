import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navlateral',
  templateUrl: './navlateral.component.html',
  styleUrls: ['./navlateral.component.css'],
})
export class NavlateralComponent implements OnInit {

  claseBotonBloqueado: string = 'botonB';
  claseBotonDesbloqueado: string = 'botonA';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  dashboardRoute: string = '/dashboard';
  transitosRoute: string = '/transitos';
  embarcacionRoute: string = '/embarcaciones';
  transitos2Route: string = '/transito/tabla-transito';



  imageUrlDashboardDesbloqueado = 'assets/img/control.svg';
  imageUrlDashboardBloqueado = 'assets/img/boton-bloqueado.svg';

  imageUrlTransitosDesbloqueado = 'assets/img/tran.svg';
  imageUrlTransitosBloqueado = 'assets/img/tran.svg';

  imageUrlEmbarcacionDesbloqueado = 'assets/img/embDark.svg';
  imageUrlEmbarcacionBloqueado = 'assets/img/embDark.svg';



}

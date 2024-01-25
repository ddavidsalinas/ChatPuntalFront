import { Component } from '@angular/core';

@Component({
  selector: 'app-navlateral',
  templateUrl: './navlateral.component.html',
  styleUrls: ['./navlateral.component.css'],
})
export class NavlateralComponent {
  dashboardRoute: string = '/dashboard/dashboard';
  transitosRoute: string = '/transito/contenido-transito';
  embarcacionRoute: string = '/embarcaciones';
  transitos2Route: string = '/transito/tabla-transito';


  claseBotonDesbloqueado: string = 'botonA';
  claseBotonBloqueado: string = 'botonB';


  imageUrlDashboardDesbloqueado = 'assets/img/control.svg';
  imageUrlDashboardBloqueado = 'assets/img/boton-bloqueado.svg';

  imageUrlTransitosDesbloqueado = 'assets/img/tran.svg';
  imageUrlTransitosBloqueado = 'assets/img/boton-bloqueado.svg';

  imageUrlEmbarcacionDesbloqueado = 'assets/img/embDark.svg';
  imageUrlEmbarcacionBloqueado = 'assets/img/boton-bloqueado.svg';



}

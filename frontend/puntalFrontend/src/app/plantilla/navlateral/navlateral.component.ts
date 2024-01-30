import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navlateral',
  templateUrl: './navlateral.component.html',
  styleUrls: ['./navlateral.component.css'],
})
export class NavlateralComponent {
<<<<<<< HEAD

=======
>>>>>>> 5b05d311b77d22c81cb6c6713f737207fd869816
  claseBotonBloqueado: string = 'botonB';
  claseBotonDesbloqueado: string = 'botonA';
  bloqueadoPanelControl = false;
  bloqueadoGestionTransitos = false;
  bloqueadoGestionEmbarcaciones = false;
  bloqueadoGestionEmbarcaciones2 = false;

  activarPanelControl(): void {
<<<<<<< HEAD

=======
>>>>>>> 5b05d311b77d22c81cb6c6713f737207fd869816
    this.bloqueadoPanelControl = true;
    this.bloqueadoGestionTransitos = false;
    this.bloqueadoGestionEmbarcaciones = false;
    this.bloqueadoGestionEmbarcaciones2 = false;
  }

  activarGestionTransitos(): void {
<<<<<<< HEAD

=======
>>>>>>> 5b05d311b77d22c81cb6c6713f737207fd869816
    this.bloqueadoPanelControl = false;
    this.bloqueadoGestionTransitos = true;
    this.bloqueadoGestionEmbarcaciones = false;
    this.bloqueadoGestionEmbarcaciones2 = false;
  }

  activarGestionEmbarcaciones(): void {
<<<<<<< HEAD

=======
>>>>>>> 5b05d311b77d22c81cb6c6713f737207fd869816
    this.bloqueadoPanelControl = false;
    this.bloqueadoGestionTransitos = false;
    this.bloqueadoGestionEmbarcaciones = true;
    this.bloqueadoGestionEmbarcaciones2 = false;
  }

  activarGestionEmbarcaciones2(): void {
<<<<<<< HEAD

=======
>>>>>>> 5b05d311b77d22c81cb6c6713f737207fd869816
    this.bloqueadoPanelControl = false;
    this.bloqueadoGestionTransitos = false;
    this.bloqueadoGestionEmbarcaciones = false;
    this.bloqueadoGestionEmbarcaciones2 = true;
  }
<<<<<<< HEAD
  constructor(private router: Router, private route: ActivatedRoute) { }

=======
  constructor(private router: Router, private route: ActivatedRoute) {}
>>>>>>> 5b05d311b77d22c81cb6c6713f737207fd869816

  dashboardRoute: string = '/dashboard';
  transitosRoute: string = '/transito';
  embarcacionRoute: string = '/embarcaciones';
  transitos2Route: string = '/transito/tabla-transito';

  imageUrlDashboardDesbloqueado = 'assets/img/control.svg';
  imageUrlDashboardBloqueado = 'assets/img/controlL.svg';

  imageUrlTransitosDesbloqueado = 'assets/img/tran.svg';
  imageUrlTransitosBloqueado = 'assets/img/tranL.svg';

  imageUrlEmbarcacionDesbloqueado = 'assets/img/embDark.svg';
  imageUrlEmbarcacionBloqueado = 'assets/img/emb.svg';
<<<<<<< HEAD



}
=======
}
>>>>>>> 5b05d311b77d22c81cb6c6713f737207fd869816

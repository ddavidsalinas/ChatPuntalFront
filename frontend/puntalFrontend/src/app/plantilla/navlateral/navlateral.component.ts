import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navlateral',
  templateUrl: './navlateral.component.html',
  styleUrls: ['./navlateral.component.css'],
})
export class NavlateralComponent implements OnInit {
  rutaActiva: string = '';
  claseBotonBloqueado: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.obtenerRutaActiva();
      }
    });
  }

  obtenerRutaActiva() {
   
    const rutaActiva = this.route.snapshot.routeConfig?.path || '';
    console.log(rutaActiva);
    this.compararRuta(rutaActiva);
  }

  compararRuta(ruta: string) {
    // Comparar la ruta con las rutas deseadas y realizar acciones en consecuencia
    switch (ruta) {
      case 'dashboard/dashboard':
        claseBotonBloqueado: 'botonB';
        break;
      case '/transito/contenido-transito':
        claseBotonBloqueado: 'botonB';
        break;
      case '/embarcaciones':
        claseBotonBloqueado: 'botonB';
        break;
      case '/transito/tabla-transito':
        claseBotonBloqueado: 'botonB';
        break;
      // Agregar más casos según sea necesario
      default:
        // Realizar acciones por defecto o según tus necesidades
        break;
    }
  }




  dashboardRoute: string = 'dashboard/dashboard';
  transitosRoute: string = '/transito/contenido-transito';
  embarcacionRoute: string = '/embarcaciones';
  transitos2Route: string = '/transito/tabla-transito';




  claseBotonDesbloqueado: string = 'botonA';



  imageUrlDashboardDesbloqueado = 'assets/img/control.svg';
  imageUrlDashboardBloqueado = 'assets/img/boton-bloqueado.svg';

  imageUrlTransitosDesbloqueado = 'assets/img/tran.svg';
  imageUrlTransitosBloqueado = 'assets/img/boton-bloqueado.svg';

  imageUrlEmbarcacionDesbloqueado = 'assets/img/embDark.svg';
  imageUrlEmbarcacionBloqueado = 'assets/img/boton-bloqueado.svg';



}

import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const role = localStorage.getItem('role');
  const requiredRole:string = route.data['role'];

  if (role==='1'){
    return true;
  }
  if (role !== requiredRole) {
    switch (role) {
      case '2':
      
      inject(Router).navigate(['dashboard']);
        break;
      case '3':
     
        inject(Router).navigate(['movil']);
        break;
      case '4':
        inject(Router).navigate(['guardiacivil']);
        break;
      default:
        inject(Router).navigate(['login']);
        break;
    }
    
    return false;
    
  }

  
  return true;
};

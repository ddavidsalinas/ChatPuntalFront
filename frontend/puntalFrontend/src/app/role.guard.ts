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
      window.location.href = 'http://localhost:4200/dashboard';
        break;
      case '3':
        window.location.href = 'http://localhost:4200/movil';
        break;
      case '4':
        window.location.href = 'http://localhost:4200/guardiacivil';
        break;
      default:
        window.location.href = 'http://localhost:4200/login';
        break;
    }
    
    return false;
    
  }

  
  return true;
};

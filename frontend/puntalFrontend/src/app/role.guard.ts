import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const role = localStorage.getItem('role');
  const requiredRole:string = route.data['role'];

  if (role !== requiredRole) {
    
    return false;
    
  }
  return true;
};

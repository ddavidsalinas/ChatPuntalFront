import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent {
 name: string = localStorage.getItem('name') || 'Usuario';
 role = localStorage.getItem('role') || null;
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) { }

  logout() {
    
    this.tokenService.removeToken();

    this.router.navigate(['/login']);
  }

}

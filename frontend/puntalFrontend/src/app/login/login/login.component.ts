import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/token.service';
import { AuthStateService } from 'src/app/shared/auth-state.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage = '';
  loginForm: FormGroup;
  errors: any = null;


  constructor(public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }


  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {

        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('name', result.user.NombreUsuario);
        localStorage.setItem('role', result.user.Rol_id);
        localStorage.setItem('id', result.user.id);

        this.responseHandler(result);

        const token = this.token.getToken();

      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      }
    );
  }
  responseHandler(data: any) {
    this.token.handleData(data.access_token);
  }

}
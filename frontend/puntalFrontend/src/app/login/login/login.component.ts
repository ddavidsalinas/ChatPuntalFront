import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  recordarContrasena: boolean = false;
  showPassword: boolean = false;
  showError: boolean = false;


  forgotPasswordEmail: string = '';
  modalRef: BsModalRef | undefined;
  @ViewChild('forgotPasswordModal', { static: false }) forgotPasswordModal!: TemplateRef<any>;

  // @ViewChild('forgotPasswordModal') forgotPasswordModal: TemplateRef<any> | undefined;
  // modalService: any;



  // constructor(private authService: AuthService, private router: Router, private modalService: BsModalService) { }
  // togglePasswordVisibility(): void {
  //   this.showPassword = !this.showPassword;
  // }
  constructor(private router: Router, private modalService: BsModalService) { }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  openForgotPasswordModal(): void {
    if (this.forgotPasswordModal) {
      this.modalRef = this.modalService.show(this.forgotPasswordModal);
    }
  }

  closeForgotPasswordModal(): void {
    this.modalRef?.hide();
  }

  sendPasswordRecoveryEmail(email: string): void {
    console.log('Recuperar contraseña', email);
    this.closeForgotPasswordModal();
  }

  login() {
    // this.authService.login(this.username, this.password).subscribe(
    //   (user) => {
    //     if (this.recordarContrasena) {
    //       this.authService.rememberPasswordLocally(this.username, this.password);
    //     }
    //     console.log('Inicio de sesión exitoso', user);
    //     this.router.navigate(['/layout'])
    //   },
    //   error => {
    //     console.error('Error al iniciar sesión', error);
    //     this.errorMessage = "Credenciales inválidas";
    //     this.showError = true;
    //   }
    // )
  }



  // resetPassword(): void {
  //   this.authService.resetPassword(this.forgotPasswordEmail).subscribe(
  //     (response) => {
  //       console.log('Respuesta de resetPassword', response);
  //       alert(response.message);
  //       this.modalRef?.hide();
  //     },
  //     error => {
  //       console.error('Error en resetPassword', error);
  //       alert(error);
  //     }
  //   )
  // }
  resetPassword(): void {
    // this.authService.resetPassword('fake-reset-token', this.forgotPasswordEmail).subscribe(
    //   (response) => {
    //     console.log('Respuesta de resetPassword', response);
    //     alert(response.message);
    //     this.modalRef?.hide();
    //   },
    //   (error) => {
    //     console.error('Error en resetPassword', error);
    //     alert(error);
    //   }
    // );
  }


  sendForgotPasswordEmail(): void {
    // Lógica para enviar el email de recuperación (simulación)
    console.log(`Email de recuperación enviado a: ${this.forgotPasswordEmail}`);
    this.modalRef?.hide();
  }

  // openForgotPasswordModal() : void {
  //   $('#forgotPasswordModal').modal('show');
  //   console.log('Abrir modal de recuperación de contraseña');
  // }

  ngOnInit(): void {
    // if (this.recordarContrasena) {
    //   const remeberCredentials = this.authService.getRememberedPassword();
    //   if (remeberCredentials) {
    //     this.username = remeberCredentials.username;
    //     this.password = remeberCredentials.password;
    //   }
    // }
    // this.router.navigate(['/login'])
  }
}

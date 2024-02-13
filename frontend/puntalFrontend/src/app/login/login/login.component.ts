import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth/auth.service';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';









  ngOnInit(): void {

  }
}

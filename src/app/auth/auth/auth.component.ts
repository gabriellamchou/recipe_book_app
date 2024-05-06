import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode: boolean = true;

  constructor() { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}
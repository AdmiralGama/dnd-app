import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <p>
      login works!
    </p>
    <section>
      <form [formGroup]="loginForm" (submit)="login()">
        <label for="username">Username:</label>
        <input id="username" type="text" formControlName="username">

        <label for="password">Password:</label>
        <input id="password" type="password" formControlName="password">

        <button type="submit">Submit</button>
      </form>
    </section>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cookie: CookieService;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(cookie: CookieService) {
    this.cookie = cookie;
  }

  login() {
    if (this.loginForm.value.username !== undefined && this.loginForm.value.password !== undefined) {
      this.cookie.set("username", this.loginForm.value.username!);
      this.cookie.set("password", this.loginForm.value.password!);
    }
  }
}

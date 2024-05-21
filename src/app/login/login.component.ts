import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router"
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Account } from '../account';
import { AccountService } from '../account.service';

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
  router: Router;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(cookie: CookieService, router: Router) {
    this.cookie = cookie;
    this.router = router;
  }

  accountService: AccountService = inject(AccountService);

  login() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    if (username !== undefined && username !== null && password !== undefined && password !== null) {
      (async () => {
        let account : Account | undefined = await this.accountService.getAccountByLogin(username!, password!);
        
        if (account !== undefined) {
          this.cookie.set("username", username!);
          this.cookie.set("password", password!);

          this.router.navigate(['/', account.id]);
        }
      })();
    }
  }
}

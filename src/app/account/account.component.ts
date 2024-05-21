import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <p>
      account works!
    </p>
    <p *ngFor="let character of account?.characters">{{ character.name }}</p>
    <p>{{ account?.id }}</p>
    <p>{{ account?.username }}</p>
    <p>{{ account?.password }}</p>
    <p>{{ account?.characters }}</p>
  `,
  styleUrl: './account.component.css'
})
export class AccountComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  accountID = -1;
  account : Account | undefined = undefined;
  accountService: AccountService = inject(AccountService);

  constructor() {
    this.accountID = Number(this.route.snapshot.params['accountid']);
    this.accountService.getAccountByID(this.accountID).then((account) => {
      this.account = account;
    });
  }
}

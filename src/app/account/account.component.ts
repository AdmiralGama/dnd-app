import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <p>
      account works!
    </p>
    <section *ngFor="let character of account?.characters">
      <a [routerLink]="['/', accountID, character.id]">
        <p>{{ character.name }}</p>
      </a>
    </section>
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

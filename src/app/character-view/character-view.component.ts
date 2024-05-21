import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { Character } from '../character';

@Component({
  selector: 'app-character-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <p>
      character-view works!
    </p>
    <a [routerLink]="['/', accountID]"><p><-- Back</p></a>
    <p>{{ character?.id }}</p>
    <p>{{ character?.name }}</p>
    <p>{{ character?.stats }}</p>
  `,
  styleUrl: './character-view.component.css'
})
export class CharacterViewComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  accountID = -1;
  characterID = -1;
  character : Character | undefined = undefined;
  accountService: AccountService = inject(AccountService);

  constructor() {
    this.accountID = Number(this.route.snapshot.params['accountid']);
    this.characterID = Number(this.route.snapshot.params['characterid']);
    this.accountService.getCharacter(this.accountID, this.characterID).then((character) => {
      this.character = character;
    });
  }
}

import { Injectable } from '@angular/core';
import { Account } from './account';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = 'http://localhost:3000/accounts';

  async getAccountByLogin(username: string, password: string): Promise<Account | undefined> {
    const data = await fetch(this.url);
    let accounts : Account[] = await data.json() ?? null;
    let matchingAccounts = accounts.filter(account => account.username === username && account.password === password);

    if (matchingAccounts.length !== 0) {
      return matchingAccounts[0];
    }
    else {
      return undefined;
    }
  }

  async getAccountByID(id: number): Promise<Account | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async getCharacter(accountid: number, characterid: number): Promise<Character | undefined> {
    const data = await fetch(`${this.url}/${accountid}`);
    let account : Account | undefined = await data.json() ?? undefined;

    if (account === undefined) { return undefined; }
    else {
      let matchingcharacters : Character[] = account.characters.filter(character => character.id === characterid);

      if (matchingcharacters.length !== 0) {
        return matchingcharacters[0];
      }
      else {
        return undefined;
      }
    }
  }
}

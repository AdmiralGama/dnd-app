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
    <section class="border border-dark" style="margin: 5% 12%; padding: 5%">
      <!--Header-->
      <div class="border border-dark row">
        <!--Name-->
        <div style="width: 40%">
          <h3 style="text-align: center;">Character Name</h3>
        </div>
        <!--Info-->
        <div style="width: 60%;">
          <div class="row">
            <div class="col">
              <p style="text-align: center;">Class & Level</p>
              <p style="text-align: center;">Race</p>
            </div>
            <div class="col">
              <p style="text-align: center;">Background</p>
              <p style="text-align: center;">Alignment</p>
            </div>
            <div class="col">
              <p style="text-align: center;">Player Name</p>
              <p style="text-align: center;">Experience</p>
            </div>
          </div>
        </div>
      </div>
      <!--Main Content-->
      <div class="row">
        <!--Left Column-->
        <div class="border border-dark col" style="padding: 2%;">
          <!--Stats-->
          <div class="row">
            <!--Base Stats-->
            <div style="width: 40%; padding-left: 0%;">
              <div class="border border-dark" style="margin: 5%; width: 95%;">
                <p class="label-big">STRENGTH</p>
                <h3 style="text-align: center;">{{ character?.stats![0] }}</h3>
              </div>
              <div class="border border-dark" style="margin: 5%; width: 95%;">
                <p class="label-big">DEXTERITY</p>
                <h3 style="text-align: center;">{{ character?.stats![1] }}</h3>
              </div>
              <div class="border border-dark" style="margin: 5%; width: 95%;">
                <p class="label-big">CONSTITUTION</p>
                <h3 style="text-align: center;">{{ character?.stats![2] }}</h3>
              </div>
              <div class="border border-dark" style="margin: 5%; width: 95%;">
                <p class="label-big">INTELLIGENCE</p>
                <h3 style="text-align: center;">{{ character?.stats![3] }}</h3>
              </div>
              <div class="border border-dark" style="margin: 5%; width: 95%;">
                <p class="label-big">WISDOM</p>
                <h3 style="text-align: center;">{{ character?.stats![4] }}</h3>
              </div>
              <div class="border border-dark" style="margin: 5%; width: 95%;">
                <p class="label-big">CHARISMA</p>
                <h3 style="text-align: center;">{{ character?.stats![5] }}</h3>
              </div>
            </div>

            <!--Proficiencies-->
            <div class="border border-dark" style="width: 60%; padding: 0%;">
              <div class="border border-dark">
                <p style="text-align: center;">Proficiency Bonus</p>
              </div>
              <div class="border border-dark">
                <p style="text-align: center;">Saving Throws</p>
              </div>
              <div class="border border-dark">
                <p style="text-align: center;">Skills</p>
              </div>
            </div>
          </div>

          <div class="border border-dark">
            <p style="text-align: center;">Passive Wisdom</p>
          </div>
          <div class="border border-dark">
            <p style="text-align: center;">Other Proficiencies & Languages</p>
          </div>
        </div>
        <!--Middle Column-->
        <div class="border border-dark col" style="padding: 2%;">
          <div class="row">
            <div class="border border-dark col">
              <p style="text-align: center;">Armor Class</p>
            </div>
            <div class="border border-dark col">
              <p style="text-align: center;">Initiative</p>
            </div>
            <div class="border border-dark col">
              <p style="text-align: center;">Speed</p>
            </div>
          </div>

          <div class="border border-dark">
            <p style="text-align: center;">Current HP</p>
          </div>
          <div class="border border-dark">
            <p style="text-align: center;">Temp HP</p>
          </div>

          <div class="row">
            <div class="border border-dark col">
              <p style="text-align: center;">Hit Dice</p>
            </div>
            <div class="border border-dark col">
            <p style="text-align: center;">Death Saves</p>
            </div>
          </div>

          <div class="border border-dark">
            <p style="text-align: center;">Attacks & Spellcasting</p>
          </div>
          <div class="border border-dark">
            <p style="text-align: center;">Equipment</p>
          </div>
        </div>
        <!--Right Column-->
        <div class="border border-dark col" style="padding: 2%;">
          <div class="border border-dark">
            <p style="text-align: center;">Personality Traits</p>
          </div>
          <div class="border border-dark">
            <p style="text-align: center;">Ideals</p>
          </div>
          <div class="border border-dark">
            <p style="text-align: center;">Bonds</p>
          </div>
          <div class="border border-dark">
            <p style="text-align: center;">Flaws</p>
          </div>
          <div class="border border-dark">
            <p style="text-align: center;">Features & Traits</p>
          </div>
        </div>
      </div>
    </section>
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

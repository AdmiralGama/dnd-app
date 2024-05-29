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
          <h3>{{ character?.name }}</h3>
          <p class="label-large">Character Name</p>
        </div>
        <!--Info-->
        <div style="width: 60%;">
          <div class="row">
            <div class="col">
              <h4>Class & Level</h4>
              <p class="label-large">Class & Level</p>
              <h4>Race</h4>
              <p class="label-large">Race</p>
            </div>
            <div class="col">
              <h4>Background</h4>
              <p class="label-large">Background</p>
              <h4>Alignment</h4>
              <p class="label-large">Alignment</p>
            </div>
            <div class="col">
              <h4>Player Name</h4>
              <p class="label-large">Player Name</p>
              <h4>Experience</h4>
              <p class="label-large">Experience</p>
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
              <div class="stat-box border border-dark">
                <p class="label bold center">STRENGTH</p>
                <h3>{{ character?.stats![0] }}</h3>
              </div>
              <div class="stat-box border border-dark">
                <p class="label bold center">DEXTERITY</p>
                <h3>{{ character?.stats![1] }}</h3>
              </div>
              <div class="stat-box border border-dark">
                <p class="label bold center">CONSTITUTION</p>
                <h3>{{ character?.stats![2] }}</h3>
              </div>
              <div class="stat-box border border-dark">
                <p class="label bold center">INTELLIGENCE</p>
                <h3>{{ character?.stats![3] }}</h3>
              </div>
              <div class="stat-box border border-dark">
                <p class="label bold center">WISDOM</p>
                <h3>{{ character?.stats![4] }}</h3>
              </div>
              <div class="stat-box border border-dark">
                <p class="label bold center">CHARISMA</p>
                <h3>{{ character?.stats![5] }}</h3>
              </div>
            </div>

            <!--Proficiencies-->
            <div class="border border-dark" style="width: 60%; padding: 0%;">
              <div class="border border-dark">
                <p class="label bold center">Proficiency Bonus</p>
              </div>
              <div class="border border-dark">
                <p class="center">Saving Throws</p>
                <p class="label bold center">SAVING THROWS</p>
              </div>
              <div class="border border-dark">
                <p class="center">Skills</p>
                <p class="label bold center">SKILLS</p>
              </div>
            </div>
          </div>

          <div class="border border-dark">
            <p class="label center">Passive Wisdom</p>
          </div>
          <div class="border border-dark">
            <p class="center">Other Proficiencies & Languages</p>
            <p class="label bold center">OTHER PROFICIENCIES & LANGUAGES</p>
          </div>
        </div>
        <!--Middle Column-->
        <div class="border border-dark col" style="padding: 2%;">
          <div class="row">
            <div class="border border-dark col">
              <p class="center">Armor Class</p>
              <p class="label bold center">ARMOR CLASS</p>
            </div>
            <div class="border border-dark col">
              <p class="center">Initiative</p>
              <p class="label bold center">INITIATIVE</p>
            </div>
            <div class="border border-dark col">
              <p class="center">Speed</p>
              <p class="label bold center">SPEED</p>
            </div>
          </div>

          <div class="border border-dark">
            <p class="center">Current HP</p>
            <p class="label bold center">CURRENT HP</p>
          </div>
          <div class="border border-dark">
            <p class="center">Temp HP</p>
            <p class="label bold center">TEMP HP</p>
          </div>

          <div class="row">
            <div class="border border-dark col">
              <p class="center">Hit Dice</p>
              <p class="label center">HIT DICE</p>
            </div>
            <div class="border border-dark col">
              <p class="center">Death Saves</p>
              <p class="label center">DEATH SAVES</p>  
            </div>
          </div>

          <div class="border border-dark">
            <p class="center">Attacks & Spellcasting</p>
            <p class="label bold center">ATTACKS & SPELLCASTING</p>
          </div>
          <div class="border border-dark">
            <p class="center">Equipment</p>
            <p class="label bold center">EQUIPMENT</p>
          </div>
        </div>
        <!--Right Column-->
        <div class="border border-dark col" style="padding: 2%;">
          <div class="border border-dark">
            <p class="center">Personality Traits</p>
            <p class="label center">PERSONALITY TRAITS</p>
          </div>
          <div class="border border-dark">
            <p class="center">Ideals</p>
            <p class="label center">IDEALS</p>
          </div>
          <div class="border border-dark">
            <p class="center">Bonds</p>
            <p class="label center">BONDS</p>
          </div>
          <div class="border border-dark">
            <p class="center">Flaws</p>
            <p class="label center">FLAWS</p>
          </div>
          <div class="border border-dark">
            <p class="center">Features & Traits</p>
            <p class="label bold center">FEATURES & TRAITS</p>
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

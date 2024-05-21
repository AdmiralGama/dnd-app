import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'Login page'
    },
    {
      path: ':accountid',
      component: AccountComponent,
      title: 'Account page'
    },
    {
      path: ':accountid/:characterid',
      component: CharacterViewComponent,
      title: 'Character View page'
    },
    {
      path: ':accountid/:characterid/edit',
      component: CharacterEditComponent,
      title: 'Character Edit page'
    }
  ];
  
  export default routeConfig;
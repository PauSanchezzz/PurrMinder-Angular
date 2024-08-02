import { Routes } from '@angular/router';
import AppRecomendationsComponent from './components/recomendations/app.recomendations/app.recomendations.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuSiginComponent } from './components/menu-sigin/menu-sigin.component';
import { UserSiginComponent } from './components/user-sigin/user-sigin.component';
import { ShelterSiginComponent } from './components/shelter-sigin/shelter-sigin.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'recomendations',
    component: AppRecomendationsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'menuSigin',
    component: MenuSiginComponent,
  },
  {
    path: 'UserSigin',
    component: UserSiginComponent
  },
  {
    path: 'ShelterSigin',
    component: ShelterSiginComponent
  }
];

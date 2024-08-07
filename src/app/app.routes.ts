import { Routes } from '@angular/router';
import { MenuSiginComponent } from './components/menu-sigin/menu-sigin.component';
import { LoginComponent } from './pages/login/login.component';
import UserSiginComponent from './pages/register/user-sigin/user-sigin.component';
import ShelterSiginComponent from './pages/register/shelter-sigin/shelter-sigin.component';
import { AdopteesComponent } from './pages/adoptees/adoptees.component';
import { HomeComponent } from './pages/home/home.component';
import AppRecomendationsComponent from './pages/recomendations/app.recomendations.component';
import { AdoptionsComponent } from './pages/adoptions/adoptions.component';
import { CatRegisterComponent } from './pages/cat-register/cat-register.component';

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
    component: UserSiginComponent,
  },
  {
    path: 'ShelterSigin',
    component: ShelterSiginComponent,
  },
  {
    path: 'adoptions',
    component: AdoptionsComponent,
  },
  {
path: 'adoptees',
component: AdopteesComponent,
  },
  {
    path: 'catRegister',
    component: CatRegisterComponent,
  }
];

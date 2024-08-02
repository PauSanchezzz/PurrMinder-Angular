import { Routes } from '@angular/router';
import AppRecomendationsComponent from './components/recomendations/app.recomendations/app.recomendations.component';
import { HomeComponent } from './home/home.component';
import { MenuSiginComponent } from './components/menu-sigin/menu-sigin.component';
import { LoginComponent } from './auth/login/login.component';
import { UserSiginComponent } from './register/user-sigin/user-sigin.component';
import { ShelterSiginComponent } from './register/shelter-sigin/shelter-sigin.component';


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

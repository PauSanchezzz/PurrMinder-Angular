import { Routes } from '@angular/router';
import AppRecomendationsComponent from './components/recomendations/app.recomendations/app.recomendations.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'recomendations',
    component: AppRecomendationsComponent,
  },
];

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
import { RegisterModuleComponent } from './pages/register-module/register-module.component';
import { Component } from '@angular/core';
import { ShelterMenuComponent } from './pages/shelter-menu/shelter-menu.component';
import { authGuard } from './guards/auth.guard';
import { UserMenuComponent } from './pages/user-menu/user-menu.component';
import { ProfileShelterComponent } from './pages/profile-shelter/profile-shelter.component';
import { AvailableForAdoptionComponent } from './pages/available-for-adoption/available-for-adoption.component';
import { UnresolvedApplicationsComponent } from './pages/unresolved-applications/unresolved-applications.component';
import { ResolvedApplicationsComponent } from './pages/resolved-applications/resolved-applications.component';

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
  },
  {
    path: 'registerModule',
    component: RegisterModuleComponent,
  },
  {
    path: 'shelterMenu',
    component: ShelterMenuComponent,
    //canActivate: [authGuard],
  },
  {
    path: 'userMenu',
    component: UserMenuComponent,
  },
  {
    path: 'profileShelter',
    component: ProfileShelterComponent,
  },
  {
    path: 'availableAdoption',
    component: AvailableForAdoptionComponent,
  },
  {
    path: 'unresolvedAdoptions',
    component: UnresolvedApplicationsComponent,
  },
  {
    path: 'resolvedAdoptions',
    component: ResolvedApplicationsComponent,
  },
];

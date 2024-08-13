import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardMenuShelterComponent } from '../../components/card-menu-shelter/card-menu-shelter.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardMenuShelterComponent],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
})
export class UserMenuComponent {
  optionsMenu = [
    {
      urlCard: '',
      imgCard: 'svg/requests.svg',
      titleCard: 'Ver Solicitudes',
    },
    {
      urlCard: '',
      imgCard: 'svg/profile.svg',
      titleCard: 'Actualizar Perfil',
    },
  ];
}

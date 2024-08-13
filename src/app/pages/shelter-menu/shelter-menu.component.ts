import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  signal,
} from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { HeaderComponent } from '../../components/header/header.component';
import { CardMenuShelterComponent } from '../../components/card-menu-shelter/card-menu-shelter.component';
register();

@Component({
  selector: 'app-shelter-menu',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ShelterMenuComponent,
    CardMenuShelterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './shelter-menu.component.html',
  styleUrl: './shelter-menu.component.css',
})
export class ShelterMenuComponent implements OnInit {
  swiperElement = signal<SwiperContainer | null>(null);

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      pagination: {
        enabled: true,
        el: '.swiper-pagination',
      },
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }

  optionsMenu = [
    {
      urlCard: '/registerModule',
      imgCard: 'svg/registers.svg',
      titleCard: 'Registros',
    },
    {
      urlCard: '/catRegister',
      imgCard: 'svg/registerCat.svg',
      titleCard: 'Ingreso del Felino',
    },
    {
      urlCard: '/availableAdoption',
      imgCard: 'svg/availability.svg',
      titleCard: 'Disponibilidad para Adopción',
    },
    {
      urlCard: '/unresolvedAdoptions',
      imgCard: 'svg/requests.svg',
      titleCard: 'Ver solicitudes pendientes',
    },
    {
      urlCard: '/profileShelter',
      imgCard: 'svg/profile.svg',
      titleCard: 'Actualizar Perfil',
    },
    {
      urlCard: '',
      imgCard: 'svg/availableApplications.svg',
      titleCard: 'Ver solicitudes resueltas',
    },
    {
      urlCard: '',
      imgCard: 'svg/requests.svg',
      titleCard: 'Cuestionario de Adopción',
    },
  ];
}

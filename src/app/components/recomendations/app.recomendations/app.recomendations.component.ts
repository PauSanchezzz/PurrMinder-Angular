import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { RecomendationCardComponent } from '../recomendation-card/recomendation-card.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-app.recomendations',
  standalone: true,
  imports: [HeaderComponent, RecomendationCardComponent, FooterComponent],
  templateUrl: './app.recomendations.component.html',
  styleUrl: './app.recomendations.component.css',
})
export default class AppRecomendationsComponent {
  Recomendations = [
    {
      url: '',
      borderColor: 'border-[#D486B2]',
      circleColor: 'bg-[#F1BDDA]',
      imageRecomendation: '/svg/arenero.svg',
      title: 'Mantenimiento Arenero',
    },
    {
      url: '',
      borderColor: 'border-[#5582E6]',
      circleColor: 'bg-[#BDCDF1]',
      imageRecomendation: '/svg/patas.svg',
      title: 'Uñas y Patas',
    },
    {
      url: '',
      borderColor: 'border-[#A15EE4]',
      circleColor: 'bg-[#D8BBF5]',
      imageRecomendation: '/svg/facial.svg',
      title: 'Caracteristicas Faciales',
    },
    {
      url: '',
      borderColor: 'border-[#A15EE4]',
      circleColor: 'bg-[#D8BBF5]',
      imageRecomendation: '/svg/dientes.svg',
      title: 'Cuidado Bucal',
    },
    {
      url: '',
      borderColor: 'border-[#D486B2]',
      circleColor: 'bg-[#F1BDDA]',
      imageRecomendation: '/svg/veterinario.svg',
      title: 'Visitas al Veterinario',
    },
    {
      url: '',
      borderColor: 'border-[#5582E6]',
      circleColor: 'bg-[#BDCDF1]',
      imageRecomendation: '/svg/comida.svg',
      title: 'Comida y Bebida',
    },
  ];
}

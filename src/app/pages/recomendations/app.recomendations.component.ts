import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RecomendationCardComponent } from '../../components/recomendation-card/recomendation-card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-app.recomendations',
  standalone: true,
  imports: [HeaderComponent, RecomendationCardComponent, FooterComponent],
  templateUrl: './app.recomendations.component.html',
})
export default class AppRecomendationsComponent {
  Recomendations = [
    {
      url: '',
      borderColor: 'border-[#D486B2]',
      circleColor: 'bg-[#F1BDDA]',
      hoverColor: 'hover:drop-shadow-lightPinkText',
      imageRecomendation: '/svg/arenero.svg',
      title: 'Mantenimiento Arenero',
    },
    {
      url: '',
      borderColor: 'border-[#5582E6]',
      circleColor: 'bg-[#BDCDF1]',
      hoverColor: 'hover:drop-shadow-lightBlueShadow',
      imageRecomendation: '/svg/patas.svg',
      title: 'Uñas y Patas',
    },
    {
      url: '',
      borderColor: 'border-[#A15EE4]',
      circleColor: 'bg-[#D8BBF5]',
      imageRecomendation: '/svg/facial.svg',
      hoverColor: 'hover:drop-shadow-purpleShadow',
      title: 'Caracteristicas Faciales',
    },
    {
      url: '',
      borderColor: 'border-[#A15EE4]',
      circleColor: 'bg-[#D8BBF5]',
      imageRecomendation: '/svg/dientes.svg',
      hoverColor: 'hover:drop-shadow-purpleShadow',
      title: 'Cuidado Bucal',
    },
    {
      url: '',
      borderColor: 'border-[#D486B2]',
      circleColor: 'bg-[#F1BDDA]',
      hoverColor: 'hover:drop-shadow-lightPinkText',
      imageRecomendation: '/svg/veterinario.svg',
      title: 'Visitas al Veterinario',
    },
    {
      url: '',
      borderColor: 'border-[#5582E6]',
      circleColor: 'bg-[#BDCDF1]',
      imageRecomendation: '/svg/comida.svg',
      hoverColor: 'hover:drop-shadow-lightBlueShadow',
      title: 'Comida y Bebida',
    },
  ];
}

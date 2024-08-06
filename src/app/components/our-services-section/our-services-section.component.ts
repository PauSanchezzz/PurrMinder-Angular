import { Component } from '@angular/core';
import { OurServicesCardComponent } from '../our-services-card/our-services-card.component';

@Component({
  selector: 'app-our-services-section',
  standalone: true,
  imports: [OurServicesCardComponent],
  templateUrl: './our-services-section.component.html',
})
export class OurServicesSectionComponent {
  imageService: string = '';
  titleService: string = '';
  description: string = '';
  Services = [
    {
      imageService: '/svg/adoptar.svg',
      titleService: 'Adoptar',
      description:
        'Podrás encontrar a tu compañero de vida, que ha pasado por un proceso de rehabilitación y está listo para encontrar su hogar definitivo.',
    },
    {
      imageService: '/svg/condicionEspecial.svg',
      titleService: 'Adoptar a un gatico con Condiciones Especiales',
      description:
        'Podrás darle la oportunidad a gatitos con condiciones especiales y, por ende, requieren cuidados más específicos, pero que tendrán mucho amor para darte.',
    },
    {
      imageService: '/svg/recomendacion.svg',
      titleService: 'Recomendaciones',
      description:
        'Podrás encontrar recomendaciones de cuidados para tus gaticos, desde consejos sobre su alimentación y salud hasta pautas para mantener su higiene y bienestar general.',
    },
    {
      imageService: '/svg/adoptado.svg',
      titleService: 'Adoptados',
      description:
        'Podrás conocer los gatitos que han sido adoptados, así como sus conmovedoras historias que te inspirarán a considerar darle un hogar a un gatito necesitado.',
    },
  ];
}

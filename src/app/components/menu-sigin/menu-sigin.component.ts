import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-menu-sigin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './menu-sigin.component.html',
})
export class MenuSiginComponent {
  Recomendations = [
    {
      borderColor: 'border-[#D486B2]',
      circleColor: 'bg-[#F1BDDA]',
      imageRecomendation: '/svg/condicionEspecial.svg',
    },
  ];
}

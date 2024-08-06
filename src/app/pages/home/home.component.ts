import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { OurServicesSectionComponent } from '../../components/our-services-section/our-services-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModalComponent } from '../../components/modal/modal.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    OurServicesSectionComponent,
    FooterComponent,
    ModalComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}

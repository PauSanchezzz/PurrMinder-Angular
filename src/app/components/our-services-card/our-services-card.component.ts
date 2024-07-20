import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-services-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services-card.component.html',
  styleUrl: './our-services-card.component.css',
})
export class OurServicesCardComponent {
  @Input() imageService: string = '';
  @Input() titleService: string = '';
  @Input() description: string = '';
}

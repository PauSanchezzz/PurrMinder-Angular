import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-recomendation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recomendation-card.component.html',
})
export class RecomendationCardComponent {
  @Input() url: string = '';
  @Input() borderColor: string = '';
  @Input() circleColor: string = '';
  @Input() hoverColor: string = '';
  @Input() imageRecomendation: string = '';
  @Input() title: string = '';
}

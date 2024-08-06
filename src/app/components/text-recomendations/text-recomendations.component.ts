import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-recomendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-recomendations.component.html',
})
export class TextRecomendationsComponent {
  @Input() lightColorContainerText = '';
  @Input() darkColorContainerText = '';
  @Input() widthContainerText = '';
  @Input() spanContainerText = '';
  @Input() textRecomendation = '';
}

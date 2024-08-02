import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TextRecomendationsComponent } from '../recomendations/text-recomendations/text-recomendations.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, TextRecomendationsComponent],
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Output() closeEvent = new EventEmitter();
  @Input() modalColor = '';
  @Input() borderModalColor = '';
  @Input() widthModal = '';
  @Input() imageModal = '';
  @Input() widthTitle = '';
  @Input() titleRecomendation = '';
  @Input() backgroundModalColor = '';

  recomendationsData = {
    recomendations: [
      {
        widthModal: 'w-[950px]',
        modalColor: 'bg-[#FFF5FB]',
        borderModalColor: 'border-[#D486B2]',
        imageModal: '/svg/arenero.svg',
        lightColorContainerText: 'bg-[#F3D6F8]',
        darkColorContainerText: 'border-[#A366AD]',
        widthTitle: 'w-64',
        titleRecomendation: 'Mantenimiento Arenero',
        Recomendations: [
          {
            textRecomendation:
              'Usa una pala para retirar las deposiciones diarias y cambia la arena semanalmente.',
          },
          {
            textRecomendation:
              'Al limpiar el arenero, utiliza un producto desinfectante neutro y no tóxico para evitar incomodar a tu gato.',
          },
          {
            textRecomendation:
              'Elige un arenero adecuado a su tamaño una vez haya alcanzado la edad adulta. Ubícalo en un lugar tranquilo, lejos de su área de comida, agua y descanso.',
          },
        ],
        backgroundModalColor: 'bg-[#FCEAFF]/30',
      },
      {
        widthModal: 'w-[950px]',
        modalColor: 'bg-[#FFF5FB]',
        borderModalColor: 'border-[#D486B2]',
        imageModal: '/svg/arenero.svg',
        lightColorContainerText: 'bg-[#F3D6F8]',
        darkColorContainerText: 'border-[#A366AD]',
        widthTitle: 'w-64',
        titleRecomendation: 'Uñas y Patas',
        Recomendations: [
          {
            textRecomendation:
              'Usa una pala para retirar las deposiciones diarias y cambia la arena semanalmente.JEJE',
          },
          {
            textRecomendation:
              'Al limpiar el arenero, utiliza un producto desinfectante neutro y no tóxico para evitar incomodar a tu gato.XDXD',
          },
          {
            textRecomendation:
              'Elige un arenero adecuado a su tamaño una vez haya alcanzado la edad adulta. Ubícalo en un lugar tranquilo, lejos de su área de comida, agua y descanso.QWQW',
          },
        ],
        backgroundModalColor: 'bg-[#FCEAFF]/30',
      },
    ],
  };

  filteredRecommendations: any = null;
  modal: any = null;

  ngOnInit(): void {
    this.findRecommendationByTitle(this.titleRecomendation);
  }

  close() {
    this.closeEvent.emit();
  }

  findRecommendationByTitle(title: string): boolean {
    const recommendation = this.recomendationsData.recomendations.find(
      (rec) => rec.titleRecomendation === title
    );

    if (recommendation) {
      this.filteredRecommendations = recommendation.Recomendations;
      this.modal = recommendation;
      console.log('Recomendación encontrada:', this.filteredRecommendations);
      console.log('css encontrada:', this.modal);

      return true;
    } else {
      this.filteredRecommendations = null;
      return false;
    }
  }
}

export function pepe(params: string, componentInstance: ModalComponent) {
  const recommendation = componentInstance.findRecommendationByTitle(params);

  if (recommendation) {
    console.log('Recomendación encontrada:', recommendation);
  } else {
    console.log('No se encontró la recomendación');
  }
}

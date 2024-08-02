import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent, pepe } from '../../modal/modal.component';
@Component({
  selector: 'app-recomendation-card',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './recomendation-card.component.html',
})
export class RecomendationCardComponent {
  modalComponentInstance = new ModalComponent();
  open: boolean = false;
  @Input() url: string = '';
  @Input() borderColor: string = '';
  @Input() circleColor: string = '';
  @Input() hoverColor: string = '';
  @Input() imageRecomendation: string = '';
  @Input() title: string = '';

  @Output() openModal = new EventEmitter<string>();

  handleClick() {
    this.openModal.emit(this.title);
    this.open = true;
    pepe(this.title, this.modalComponentInstance);
    /* pepe(this.title); */
  }
}

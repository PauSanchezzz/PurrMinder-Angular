import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogDescriptionCatComponent } from '../../components/dialog-description-cat/dialog-description-cat.component';

/*
  <app-dialog-description-cat />
 */
@Component({
  selector: 'app-adoption-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adoption-card.component.html',
  styleUrl: './adoption-card.component.css',
})
export class AdoptionCardComponent {
  @Input({ required: true }) nameCat!: string;
  @Input({ required: true }) imageCat!: String;
  @Input({ required: true }) weightCat!: string;
  @Input({ required: true }) sexCat_id!: number;
  @Input({ required: true }) ageCat!: number;

  @Output() cardClick = new EventEmitter<any>();

  onClickCard() {
    const catData = {
      nameCat: this.nameCat,
      imageCat: this.imageCat,
      sexCat_id: this.sexCat_id,
      ageCat: this.ageCat,
      weightCat: this.weightCat,
    };
    this.cardClick.emit(catData);
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adoption-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adoption-card.component.html',
  styleUrl: './adoption-card.component.css',
})
export class AdoptionCardComponent {
  @Input({required:true}) nameCat!: string;
  @Input({required:true}) weightCat!: string;
  @Input({required:true}) sexCat!: number;
  @Input({required:true}) ageCat!: number;
}

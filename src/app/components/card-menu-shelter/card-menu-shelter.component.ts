import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-menu-shelter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-menu-shelter.component.html',
  styleUrl: './card-menu-shelter.component.css',
})
export class CardMenuShelterComponent {
  @Input({ required: true }) urlCard!: string;
  @Input({ required: true }) imgCard!: string;
  @Input({ required: true }) titleCard!: string;
}

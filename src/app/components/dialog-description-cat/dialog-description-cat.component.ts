import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AdoptionsComponent } from '../../pages/adoptions/adoptions.component';
import { AdoptionCardComponent } from '../adoption-card/adoption-card.component';
@Component({
  selector: 'app-dialog-description-cat',
  standalone: true,
  imports: [
    DialogModule,
    AdoptionsComponent,
    AdoptionCardComponent,
    ButtonModule,
  ],
  templateUrl: './dialog-description-cat.component.html',
  styleUrl: './dialog-description-cat.component.css',
})
export class DialogDescriptionCatComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() catData: any;

  hideDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  showDialog() {
    this.visible = true;
    this.visibleChange.emit(this.visible);
  }
}

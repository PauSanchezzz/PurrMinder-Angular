import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CatsAvailableComponent } from '../cats-available/cats-available.component';
import { CatsNotAvailableComponent } from '../cats-not-available/cats-not-available.component';
import { FormsModule } from '@angular/forms';
import { AllCatsComponent } from '../all-cats/all-cats.component';

@Component({
  selector: 'app-available-for-adoption',
  standalone: true,
  imports: [
    HeaderComponent,
    CatsAvailableComponent,
    CatsNotAvailableComponent,
    AllCatsComponent,
    FormsModule,
  ],
  templateUrl: './available-for-adoption.component.html',
  styleUrl: './available-for-adoption.component.css',
})
export class AvailableForAdoptionComponent {
  typeView: string | null = null;
}

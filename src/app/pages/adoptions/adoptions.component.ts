import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat, GetCatsResponse } from '../../interfaces/cat.interface';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AdoptionCardComponent } from '../../components/adoption-card/adoption-card.component';
import AppRecomendationsComponent from '../recomendations/app.recomendations.component';
import { DialogDescriptionCatComponent } from '../../components/dialog-description-cat/dialog-description-cat.component';

@Component({
  selector: 'app-adoptions',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AdoptionCardComponent,
    DialogDescriptionCatComponent,
  ],
  templateUrl: './adoptions.component.html',
})
export class AdoptionsComponent implements OnInit {
  catsAvailable: Cat[] = [];
  visible: boolean = false;
  constructor(private CatService: CatService) {}

  ngOnInit(): void {
    this.CatService.getCats().subscribe((response: GetCatsResponse) => {
      this.catsAvailable = response.cats;
      console.log(this.catsAvailable);
    });
  }

  isModalVisible: boolean = false;
  selectedCat: any; // Aquí se almacenará la información del gato seleccionado

  // Método para abrir el modal y pasar los datos del gato seleccionado
  openModal(cat: any) {
    this.selectedCat = cat;
    this.isModalVisible = true;
  }
}

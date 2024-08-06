import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat, GetCatsResponse } from '../../interfaces/cat.interface';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AdoptionCardComponent } from '../../components/adoption-card/adoption-card.component';
import AppRecomendationsComponent from '../recomendations/app.recomendations.component';

@Component({
  selector: 'app-adoptions',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AdoptionCardComponent,
    AppRecomendationsComponent,
  ],
  templateUrl: './adoptions.component.html',
})
export class AdoptionsComponent implements OnInit {
  catsAvailable: Cat[] = [];

  constructor(private CatService: CatService) {}

  ngOnInit(): void {
    this.CatService.getCats().subscribe((response: GetCatsResponse) => {
      this.catsAvailable = response.cats;
      console.log(this.catsAvailable);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AdoptionCardComponent } from '../../components/adoption-card/adoption-card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Cat, GetCatsResponse } from '../../interfaces/cat.interface';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-adoptees',
  standalone: true,
  imports: [HeaderComponent, AdoptionCardComponent],
  templateUrl: './adoptees.component.html',
})
export class AdopteesComponent implements OnInit {
  catsAdopted: Cat[] = [];

  constructor(private CatService: CatService) {}

  ngOnInit(): void {
    this.CatService.getCatsAvaliable().subscribe(
      (response: GetCatsResponse) => {
        this.catsAdopted = response.cats;
      },
    );
  }
}

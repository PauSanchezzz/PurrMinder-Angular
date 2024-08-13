import { Component, OnInit } from '@angular/core';
import { Cat, GetCatsResponse } from '../../interfaces/cat.interface';
import { CatService } from '../../services/cat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cats-not-available',
  standalone: true,
  imports: [],
  templateUrl: './cats-not-available.component.html',
  styleUrl: './cats-not-available.component.css',
})
export class CatsNotAvailableComponent implements OnInit {
  catsAvailable: Cat[] = [];

  constructor(private CatService: CatService) {}

  ngOnInit(): void {
    this.CatService.getCatsAvaliable().subscribe(
      (response: GetCatsResponse) => {
        this.catsAvailable = response.cats;
      },
    );
  }

  descriptionCat(name: string, descriptionCat: string): void {
    Swal.fire({
      title: name,
      text: descriptionCat,
    });
  }
}

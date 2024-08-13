import { Component, OnInit } from '@angular/core';
import { Cat, GetCatsResponse } from '../../interfaces/cat.interface';
import { CatService } from '../../services/cat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cats-available',
  standalone: true,
  imports: [],
  templateUrl: './cats-available.component.html',
  styleUrl: './cats-available.component.css',
})
export class CatsAvailableComponent implements OnInit {
  catsAvailable: Cat[] = [];

  constructor(private CatService: CatService) {}

  ngOnInit(): void {
    this.CatService.getCats().subscribe((response: GetCatsResponse) => {
      this.catsAvailable = response.cats;
    });
  }

  descriptionCat(name: string, descriptionCat: string): void {
    Swal.fire({
      title: name,
      text: descriptionCat,
    });
  }
}

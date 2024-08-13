import { Component, OnInit } from '@angular/core';
import { Cat, GetCatsResponse } from '../../interfaces/cat.interface';
import { CatService } from '../../services/cat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-cats',
  standalone: true,
  imports: [],
  templateUrl: './all-cats.component.html',
  styleUrl: './all-cats.component.css',
})
export class AllCatsComponent implements OnInit {
  catsAvailable: Cat[] = [];

  constructor(private CatService: CatService) {}

  ngOnInit(): void {
    this.CatService.getAllCats().subscribe((response: GetCatsResponse) => {
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

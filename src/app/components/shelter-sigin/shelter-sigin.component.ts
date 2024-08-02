import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-shelter-sigin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './shelter-sigin.component.html',
  styleUrl: './shelter-sigin.component.css',
})
export class ShelterSiginComponent {
  public shelterSiginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    responsibleName: ['', [Validators.required]],
    responsibleLastName: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    documentType: ['', [Validators.required]],
    documentNumber: ['', [Validators.required]],
    responsibleBirthdate: ['', [Validators.required]],
    nameShelter: ['', [Validators.required]],
    phoneShelter: ['', [Validators.required]],
    addressShelter: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.shelterSiginForm.markAllAsTouched();
  }
}

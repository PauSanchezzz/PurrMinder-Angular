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
  selector: 'app-user-sigin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './user-sigin.component.html',
  styleUrl: './user-sigin.component.css',
})
export class UserSiginComponent {
  public userSiginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    userName: ['', [Validators.required]],
    userLastName: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    documentType: ['', [Validators.required]],
    documentNumber: ['', [Validators.required]],
    userBirthdate: ['', [Validators.required]],
    cityUser: ['', [Validators.required]],
    phoneUser: ['', [Validators.required]],
    addressUser: ['', [Validators.required]],
    occupationUser: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.userSiginForm.markAllAsTouched();
  }
}

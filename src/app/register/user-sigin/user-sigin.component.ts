import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-user-sigin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './user-sigin.component.html',
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

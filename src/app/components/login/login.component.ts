import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

public loginForm: FormGroup = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
})

constructor(private fb: FormBuilder) {}

onSubmit() {
  this.loginForm.markAllAsTouched();
}

}

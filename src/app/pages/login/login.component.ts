import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/auth.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnChanges {
  @Input() data: Auth | null = null;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private Router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.loginForm.patchValue({
        email: this.data.email,
        password: this.data.password,
      });
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.data) {
      } else {
        this.AuthService.loginUser(this.loginForm.value).subscribe({
          next: (response: any) => {
            this.AuthService.saveToken(response.access_token);
            Swal.fire({
              title: '¡Ingreso Exitoso!',
              icon: 'success',
            });
            this.loginForm.reset();
            this.Router.navigate(['']);
          },
          error: (error: any) => {
            Swal.fire({
              title: 'Ingreso Fallido',
              text: 'Intente nuevamente',
              icon: 'error',
            });
            this.loginForm.reset();
          },
        });
      }
    }
  }
}

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { User } from '../../../interfaces/user.interface';
import { AuthService } from '../../../services/auth.service';
import { Route, Router } from '@angular/router';
import { formatDate } from '@angular/common';

import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shelter-sigin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './shelter-sigin.component.html',
})
export default class ShelterSiginComponent implements OnChanges, OnInit {
  @Input() data: User | null = null;
  shelterSiginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router
  ) {
    this.shelterSiginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      documentType_id: ['', [Validators.required]],
      documentNumber: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      nameShelter: ['', [Validators.required]],
      telephoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      role_id: [1],
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.shelterSiginForm.patchValue({
        email: this.data.email,
        name: this.data.name,
        lastName: this.data.lastName,
        password: this.data.password,
        documentType_id: this.data.documentType_id,
        documentNumber: this.data.documentNumber,
        birthDate: formatDate(this.data.birthDate, 'yyyy-MM-dd', 'en'),
        nameShelter: this.data.nameShelter,
        telephoneNumber: this.data.telephoneNumber,
        address: this.data.address,
        role_id: [1],
      });
    }
  }

  onSubmit() {
    if (this.shelterSiginForm.valid) {
      if (this.data) {
      } else {
        console.log(this.shelterSiginForm.value);
        this.AuthService.createUser(this.shelterSiginForm.value).subscribe({
          next: (response: any) => {
            Swal.fire({
              title: '¡Registro Exitoso!',
              icon: 'success',
            });

            this.router.navigate(['/login']);
          },
          error: (error: any) => {
            Swal.fire({
              title: 'Registro Fallido',
              text: 'Intente nuevamente',
              icon: 'error',
            });
          },
        });
      }
    }
  }
}

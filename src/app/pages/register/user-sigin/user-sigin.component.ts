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
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
import {
  DocumentType,
  City,
  Occupation,
  GetDocumentTypeResponse,
  GetCityResponse,
  GetOccupationResponse,
  GetCalendarResponse,
} from '../../../interfaces/selectForm.interface';
import { SelectFormService } from '../../../services/select-form.service';

@Component({
  selector: 'app-user-sigin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './user-sigin.component.html',
})
export default class UserSiginComponent implements OnChanges, OnInit {
  @Input() data: User | null = null;
  userSiginForm!: FormGroup;

  DocumentType: DocumentType[] = [];
  City: City[] = [];
  Occupation: Occupation[] = [];

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private SelectFormService: SelectFormService,
    private router: Router,
  ) {
    this.userSiginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      documentType_id: ['', [Validators.required]],
      documentNumber: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      city_id: ['', [Validators.required]],
      telephoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      role_id: [2],
      occupation: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.SelectFormService.getDocumentType().subscribe(
      (response: GetDocumentTypeResponse) => {
        this.DocumentType = response.data;
      },
    );
    this.SelectFormService.getCity().subscribe((response: GetCityResponse) => {
      this.City = response.data;
    });
    this.SelectFormService.getOccupation().subscribe(
      (response: GetOccupationResponse) => {
        this.Occupation = response.data;
      },
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.userSiginForm.patchValue({
        email: this.data.email,
        name: this.data.name,
        lastName: this.data.lastName,
        password: this.data.password,
        documentType_id: this.data.documentType_id,
        documentNumber: this.data.documentNumber,
        birthDate: formatDate(this.data.birthDate, 'yyyy-MM-dd', 'en'),
        city_id: this.data.city_id,
        telephoneNumber: this.data.telephoneNumber,
        address: this.data.address,
        role_id: [2],
        occupation: this.data.occupation,
      });
    }
  }
  onSubmit() {
    if (this.userSiginForm.valid) {
      if (this.data) {
      } else {
        this.AuthService.createUser(this.userSiginForm.value).subscribe({
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
    } else {
      this.userSiginForm.markAllAsTouched();
      Swal.fire({
        title: 'Registro Fallido',
        text: 'Debe completar todos los campos.',
        icon: 'error',
      });
    }
  }
}

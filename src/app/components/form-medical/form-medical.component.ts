import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../../services/medical.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-medical',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-medical.component.html',
  styleUrl: './form-medical.component.css',
})
export class FormMedicalComponent {
  medicalRegisterForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private MedicalService: MedicalService,
  ) {
    this.medicalRegisterForm = this.fb.group({
      cat_id: ['', [Validators.required]],
      dateMedicalProcedure: ['', [Validators.required]],
      typeMedicalProcedure_id: ['', [Validators.required]],
      CostMedicalProcedure: ['', [Validators.required]],
      commentsMedicalProcedure: ['', [Validators.required]],
      supportMedicalProcedure: new FormControl(null),
    });
  }

  onImagePicked(event: Event): void {
    const target = (event.target as HTMLInputElement).files![0];
    this.medicalRegisterForm.patchValue({ supportMedicalProcedure: target });
  }

  onSubmit() {
    const formData = new FormData();

    Object.keys(this.medicalRegisterForm.controls).forEach((key) => {
      const value = this.medicalRegisterForm.get(key)?.value;
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    this.MedicalService.registerMedical(formData).subscribe({
      next: (response: any) => {
        Swal.fire({
          title: '¡Registro Exitoso!',
          icon: 'success',
        });
        this.medicalRegisterForm.reset();
      },
      error: (error: any) => {
        Swal.fire({
          title: '¡Campos Vacios!',
          text: 'Debe completar todos los campos.',
          icon: 'error',
        });
        this.medicalRegisterForm.reset();
      },
    });
  }
}

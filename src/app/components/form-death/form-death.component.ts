import { DeathService } from '../../services/death.service';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Death } from '../../interfaces/death.interface';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-death',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-death.component.html',
  styleUrl: './form-death.component.css',
})
export class FormDeathComponent implements OnChanges {
  @Input() data: Death | null = null;
  deathRegisterForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private DeathService: DeathService,
  ) {
    this.deathRegisterForm = this.fb.group({
      cat_id: ['', [Validators.required]],
      dateOfDeath: ['', [Validators.required]],
      reasonOfDeath_id: ['', [Validators.required]],
      associatedCosts: ['', [Validators.required]],
      comments: ['', [Validators.required]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.deathRegisterForm.patchValue({
        cat_id: this.data.cat_id,
        dateOfDeath: formatDate(this.data.dateOfDeath, 'yyyy-MM-dd', 'en'),
        reasonOfDeath_id: this.data.reasonOfDeath_id,
        associatedCosts: this.data.associatedCosts,
        comments: this.data.comments,
      });
    }
  }

  onSubmit() {
    if (this.deathRegisterForm.valid) {
      if (this.data) {
      } else {
        this.DeathService.registerDeath(this.deathRegisterForm.value).subscribe(
          {
            next: (response: any) => {
              Swal.fire({
                title: '¡Registro Exitoso!',
                icon: 'success',
              });
              this.deathRegisterForm.reset();
            },
            error: (error: any) => {
              Swal.fire('Error', 'Death registration failed', 'error');
             },
          },
        );
      }
    }
  }
}

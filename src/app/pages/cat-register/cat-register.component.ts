import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cat } from '../../interfaces/cat.interface';
import { CatService } from '../../services/cat.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cat-register',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './cat-register.component.html',
  styleUrl: './cat-register.component.css'
})
export class CatRegisterComponent{

  @Input() data: Cat |null = null;
  catRegisterForm!: FormGroup;

constructor(private fb: FormBuilder,
private CatService:CatService,
private router: Router) {
  this.catRegisterForm = this.fb.group({
    nameCat: ['', [Validators.required]],
    imageCat: new FormControl(null),
    descriptionCat: ['', [Validators.required]],
    ageCat: ['', [Validators.required]],
    calendar_id: ['', [Validators.required]],
    weightCat: ['', [Validators.required]],
    sexCat_id: ['', [Validators.required]],
    specialCondition: ['', [Validators.required]],
    specialCondition_id: [''],
    catHealth_id: ['', [Validators.required]],
    personality_id: ['', [Validators.required]],
    availabilityCat: ['', [Validators.required]],
})}

  onImagePicked(event: Event): void {
    const target = (event.target as HTMLInputElement).files![0];
      this.catRegisterForm.patchValue({ imageCat: target });
  }

onSubmit(){
  const formData = new FormData();

    Object.keys(this.catRegisterForm.controls).forEach(key => {
    const value = this.catRegisterForm.get(key)?.value;
    if (value !== null && value !== undefined) {
      formData.append(key, value);
    }
  });

this.CatService.createCat(formData).subscribe({
next: (response: any) => {
Swal.fire({
              title: '¡Registro Exitoso!',
              icon: 'success',
            });
},
error: (error: any) => {
  Swal.fire({
              title: '¡Campos Vacios!',
              text: 'Debe completar todos los campos.',
              icon: 'error',
            });

},});
}
}

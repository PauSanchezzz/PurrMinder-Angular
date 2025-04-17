import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import {
  CatRequested,
  CreateResponseAdoption,
  GetCatRequestedResponse,
  QuestionsAndAnswer,
  UserByApplication,
} from '../../interfaces/CatRequested.interface';
import { CatRequestedService } from '../../services/cat-requested.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unresolved-applications',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './unresolved-applications.component.html',
  styleUrl: './unresolved-applications.component.css',
})
export class UnresolvedApplicationsComponent implements OnInit, OnChanges {
  catsRequestedList: CatRequested[] = [];
  getQuestionsAndAnswers: QuestionsAndAnswer[] = [];
  getUserByApplication: UserByApplication | null = null;

  @Input() data: CreateResponseAdoption | null = null;
  responseAdoption!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private CatRequestedService: CatRequestedService,
    private router: Router,
  ) {
    this.responseAdoption = this.fb.group({
      comments: [''],
      evaluationStatus_id: [''],
    });
  }

  adoptionApplication(idApplication: number, evaluationStatus: number): void {
    this.responseAdoption
      .get('evaluationStatus_id')
      ?.setValue(evaluationStatus);

    if (this.responseAdoption.valid) {
      this.CatRequestedService.createResponseAdoption(
        idApplication,
        this.responseAdoption.value,
      ).subscribe({
        next: (response: any) => {
          Swal.fire({
            title: '¡Registro Exitoso!',
            icon: 'success',
          }).then(() => {
            window.location.reload();
          });
        },
        error: (error: any) => {
          Swal.fire({
            title: 'Registro Fallido',
            text: 'Intente nuevamente',
            icon: 'error',
          });
        },
      });
    } else {
      this.responseAdoption.markAllAsTouched();
      Swal.fire({
        title: 'Registro Fallido',
        text: 'Intente nuevamente.',
        icon: 'error',
      });
    }
  }

  ngOnChanges(): void {
    if (this.data) {
      this.responseAdoption.patchValue({
        comments: this.data.comments,
        evaluationStatus_id: this.data.evaluationStatus_id,
      });
    }
  }

  ngOnInit(): void {
    this.CatRequestedService.getCatsRequested().subscribe(
      (response: GetCatRequestedResponse) => {
        this.catsRequestedList = response.cats;
        console.log(this.catsRequestedList);
      },
    );
  }

  viewApplication(id: number): void {
    this.CatRequestedService.getQuestionsAndAnswers(id).subscribe(
      (response) => {
        this.getQuestionsAndAnswers = response.questions_and_answers;
      },
    );
    this.CatRequestedService.getUserByApplication(id).subscribe((response) => {
      this.getUserByApplication = response.user;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import {
  CatRequested,
  GetCatRequestedResponse,
  QuestionsAndAnswer,
  UserByApplication,
} from '../../interfaces/CatRequested.interface';
import { CatRequestedService } from '../../services/cat-requested.service';



@Component({
  selector: 'app-unresolved-applications',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './unresolved-applications.component.html',
  styleUrl: './unresolved-applications.component.css',
})
export class UnresolvedApplicationsComponent implements OnInit {
  catsRequestedList: CatRequested[] = [];
  getQuestionsAndAnswers: QuestionsAndAnswer[] = [];
  getUserByApplication: UserByApplication | null = null;

  constructor(private CatRequestedService: CatRequestedService) {}

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

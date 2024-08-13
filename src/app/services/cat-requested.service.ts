import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  GetCatRequestedResponse,
  GetQuestionsAndAnswerResonse,
  getUserByApplicationResponse,
} from '../interfaces/CatRequested.interface';

@Injectable({
  providedIn: 'root',
})
export class CatRequestedService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCatsRequested(): Observable<GetCatRequestedResponse> {
    return this.http.get<GetCatRequestedResponse>(
      `${this.baseUrl}/AdoptionApplications/catRequested`,
    );
  }
  getQuestionsAndAnswers(id: number): Observable<GetQuestionsAndAnswerResonse> {
    return this.http.get<GetQuestionsAndAnswerResonse>(
      `${this.baseUrl}/AdoptionApplications/getQuestionsAndAnswers/${id}`,
    );
  }
  getUserByApplication(id: number): Observable<getUserByApplicationResponse> {
    return this.http.get<getUserByApplicationResponse>(
      `${this.baseUrl}/AdoptionApplications/getUserByApplication/${id}`,
    );
  }
}

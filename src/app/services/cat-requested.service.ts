import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FilterDetailAdoptions,
  GetCatRequestedResponse,
  GetQuestionsAndAnswerResonse,
  getUserByApplicationResponse,
} from '../interfaces/CatRequested.interface';
import { getAdoptionsResponse } from '../interfaces/adoptions.interface';

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

  createResponseAdoption(
    application_id: number,
    responseData: any,
  ): Observable<any> {
    return this.http.patch<any>(
      `${this.baseUrl}/AdoptionApplications/updateResponseEvaluation/${application_id}`,
      responseData,
    );
  }

  getDetailAdoptions(): Observable<getAdoptionsResponse> {
    return this.http.get<getAdoptionsResponse>(
      `${this.baseUrl}/AdoptionApplications/detailAdoptions`,
    );
  } /* ACA */

  filterDetailAdoption(
    filter: FilterDetailAdoptions,
  ): Observable<FilterDetailAdoptions> {
    return this.http.post<FilterDetailAdoptions>(
      `${this.baseUrl}/AdoptionApplications/detailAdoptionsFilter`,
      filter,
    );
  }
}

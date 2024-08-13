import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';

import { Cat, GetCatsResponse } from '../interfaces/cat.interface';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root',
})
export class CatService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCats(): Observable<GetCatsResponse> {
    return this.http.get<GetCatsResponse>(`${this.baseUrl}/cats/catsAdoption`);
  }

  getCatsAvaliable(): Observable<GetCatsResponse> {
    return this.http.get<GetCatsResponse>(`${this.baseUrl}/cats/catsAdopted`);
  }

  getAllCats(): Observable<GetCatsResponse> {
    return this.http.get<GetCatsResponse>(`${this.baseUrl}/cats/allCats`);
  }

  createCat(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cats/catRegister`, data);
  }
}

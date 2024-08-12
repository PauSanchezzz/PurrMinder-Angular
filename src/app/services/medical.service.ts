import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicalService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  registerMedical(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cats/medicalRegister`, data);
  }
}

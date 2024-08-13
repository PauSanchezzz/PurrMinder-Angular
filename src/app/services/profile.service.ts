import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { GetProfileResponse } from '../interfaces/getProfileResponse.interface';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<GetProfileResponse> {
    return this.http.get<GetProfileResponse>(`${this.baseUrl}/users/profile`);
  }
}

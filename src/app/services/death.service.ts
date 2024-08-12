import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Death } from '../interfaces/death.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeathService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  registerDeath(death: Death): Observable<Death> {
    return this.http.post<Death>(`${this.baseUrl}/cats/deathRegister`, death);
  }
}

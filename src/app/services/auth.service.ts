import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

import { User } from '../interfaces/user.interface';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private token: string = 'token';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/register`, user);
  }

  loginUser(auth: Auth): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/auth/login`, auth);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.token, token);
  }

  getToken(): string {
    return localStorage.getItem(this.token) ||'';
  }

  logout(): void {
    localStorage.removeItem(this.token);
  }

  isAuth() {
    return this.getToken().length > 0;
  }
}

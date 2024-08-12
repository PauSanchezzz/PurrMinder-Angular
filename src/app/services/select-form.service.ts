import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { GetCalendarResponse, GetCatHealthResponse, GetCityResponse, GetDocumentTypeResponse, GetOccupationResponse, GetPersonalityResponse, GetSexResponse, GetSpecialConditionResponse } from '../interfaces/selectForm.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectFormService {

private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

getDocumentType(): Observable<GetDocumentTypeResponse> {
return this.http.get<GetDocumentTypeResponse>(`${this.baseUrl}/select/select_typeDocument`);
}

getCity(): Observable<GetCityResponse> {
return this.http.get<GetCityResponse>(`${this.baseUrl}/select/select_city`);
}

getOccupation(): Observable<GetOccupationResponse> {
return this.http.get<GetOccupationResponse>(`${this.baseUrl}/select/select_occupation`);
}

getCalendar(): Observable<GetCalendarResponse> {
return this.http.get<GetCalendarResponse>(`${this.baseUrl}/select/select_calendar`);
}

getSex(): Observable<GetSexResponse> {
return this.http.get<GetSexResponse>(`${this.baseUrl}/select/select_sex`);
}

getPersonality(): Observable<GetPersonalityResponse> {
return this.http.get<GetPersonalityResponse>(`${this.baseUrl}/select/select_personality`);
}

GetCatHealth(): Observable<GetCatHealthResponse> {
return this.http.get<GetCatHealthResponse>(`${this.baseUrl}/select/select_catHealth`);
}

GetSpecialCondition(): Observable<GetSpecialConditionResponse> {
return this.http.get<GetSpecialConditionResponse>(`${this.baseUrl}/select/select_specialCondition`);
}
}

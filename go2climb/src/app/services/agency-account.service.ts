import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgencyAccountService {
  private apiUrl = 'http://localhost:3000/user';
  private userEmail: string='zoneturist1@gmail.com';

  constructor(private http: HttpClient) { }

  getEmail(): string {
    return this.userEmail;
  }

  setEmail(email: string) {
    this.userEmail = email;
  }


  getAgencyByUser(email: string): Observable<any> {
    const url = `${this.apiUrl}?email=${email}&userType=agency`;
    return this.http.get(url);
  }

  updateAgency(agency: any): Observable<any> {
    const url = `${this.apiUrl}/${agency.id}`;
    return this.http.put(url, agency);
  }
}

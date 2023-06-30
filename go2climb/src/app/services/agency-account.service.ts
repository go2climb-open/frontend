import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { agency } from '../models/agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyAccountService {

  apiUrl = 'https://go2climbopen-183b10dd661a.herokuapp.com/api/v1/agencies';

  constructor(private http: HttpClient) {}

  getById(id: string) {
    return this.http.get<agency>(`${this.apiUrl}/${id}`);
  }

  update(agency: agency) {
    return this.http.put(`${this.apiUrl}/${agency.id}`, agency);
  }
}

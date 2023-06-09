import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgencyService } from 'src/app/agency/agency-service/models/AgencyService';

@Injectable({
  providedIn: 'root',
})
export class AgencyServiceService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000/services';

  getServiceById(id: number) {
    return this.http.get<AgencyService>(`${this.apiUrl}/${id}`);
  }

  addService(service: any) {
    return this.http.post(this.apiUrl, service);
  }

  deleteService(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

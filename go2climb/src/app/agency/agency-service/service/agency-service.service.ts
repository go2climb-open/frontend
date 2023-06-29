import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AgencyServiceRequest,
  AgencyServiceResponse,
} from 'src/app/agency/agency-service/models/AgencyService';

@Injectable({
  providedIn: 'root',
})
export class AgencyServiceService {
  constructor(private http: HttpClient) {}

  // apiUrl = 'http://localhost:3000/services';
  apiUrl = 'http://44.204.1.137:8080/api/v1/services';

  getServiceById(id: number) {
    return this.http.get<AgencyServiceResponse>(`${this.apiUrl}/${id}`);
  }

  addService(service: any) {
    const serviceBody: AgencyServiceRequest = {
      name: service.name,
      description: service.description,
      location: service.location,
      score: 0,
      price: service.price,
      newPrice: service.price,
      creationDate: new Date().toDateString(),
      photos: service.img_url,
      isOffer: false,
      isPopular: false,
    };

    return this.http.post(this.apiUrl, serviceBody);
  }

  putService(id: number, service: any) {
    return this.http.put(`${this.apiUrl}/${id}`, service);
  }

  deleteService(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

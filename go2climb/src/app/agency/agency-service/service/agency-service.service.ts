import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AgencyServiceRequest,
  AgencyServiceResponse,
  ReviewsResponse,
} from 'src/app/agency/agency-service/models/AgencyService';

@Injectable({
  providedIn: 'root',
})
export class AgencyServiceService {
  constructor(private http: HttpClient) {}

  // apiUrl = 'http://localhost:3000/services';
  apiUrl = 'http://44.204.1.137:8080/api/v1/services';
  agencyUrl = 'http://44.204.1.137:8080/api/v1/agencies';

  getServiceById(id: number) {
    return this.http.get<AgencyServiceResponse>(`${this.apiUrl}/${id}`);
  }

  getServicesReviewsById(id: number) {
    return this.http.get<ReviewsResponse>(
      `${this.apiUrl}/${id}/service-reviews`
    );
  }

  addService(service: any, agencyId: string) {
    const serviceBody: AgencyServiceRequest = {
      name: service.name,
      description: service.description,
      location: service.location,
      score: 0,
      price: service.price,
      newPrice: service.price,
      creationDate: new Date().toDateString(),
      photos: service.img_url,
      isOffer: 0,
      isPopular: 0,
    };

    return this.http.post(
      `${this.agencyUrl}/${agencyId}/services`,
      serviceBody
    );
  }

  putService(id: number, service: any) {
    return this.http.put(`${this.apiUrl}/${id}`, service);
  }

  deleteService(id: number, agencyId: string) {
    return this.http.delete(`${this.agencyUrl}/${agencyId}/services/${id}`);
  }
}

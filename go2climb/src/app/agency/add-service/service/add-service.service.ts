import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddServiceService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000/service/';

  addService(service: any) {
    return this.http.post(this.apiUrl, service).subscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Iservice } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  services: Iservice[] = [];
  value = '';
  userType: string = 'agency';

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchServices();
  }

  fetchServices() {
    this.servicesService.getServices().subscribe((data) => {
      this.services = data;
      //console.log(this.services);
    });
  }

  serviceDetail() {
    console.log('servicedetail');
  }

  search(value: String) {
    console.log('searching ' + value);
    this.router.navigate(['/search', value]);
  }

  handleGoToAddService() {
    this.router.navigate(['/add-service']);
  }
}

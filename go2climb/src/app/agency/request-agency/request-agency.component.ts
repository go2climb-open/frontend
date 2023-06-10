import {Component, OnInit} from '@angular/core';
import {Iservice} from "../../models/service";
import {ServicesService} from "../../services/services-service.service";

@Component({
  selector: 'app-request-agency',
  templateUrl: './request-agency.component.html',
  styleUrls: ['./request-agency.component.css']
})
export class RequestAgencyComponent implements OnInit{

  services: Iservice[] = [];

  constructor(private servicesService: ServicesService) {
  }

  ngOnInit(): void {
    this.fetchServices();
  }

  fetchServices() {
    this.servicesService.getServices().subscribe((data) => {
      this.services = data;
    });
  }

}

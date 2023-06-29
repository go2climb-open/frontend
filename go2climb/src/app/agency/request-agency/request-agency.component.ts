import {Component, OnInit} from '@angular/core';
import {Iservice} from "../../models/service";
import {ServicesService} from "../../services/services-service.service";

interface Response {
  content: any[];
}

@Component({
  selector: 'app-request-agency',
  templateUrl: './request-agency.component.html',
  styleUrls: ['./request-agency.component.css']
})
export class RequestAgencyComponent implements OnInit{

  services: Iservice[] = [];
  response: Response = {content: []}

  constructor(private servicesService: ServicesService) {
  }

  ngOnInit(): void {
    this.fetchServices();
  }

  fetchServices() {
    this.servicesService.getServices().subscribe((data) => {
      this.response = data;
      console.log(this.response);
      this.services = this.response.content;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyService } from 'src/app/agency/agency-service/models/AgencyService';
import { AgencyServiceService } from 'src/app/agency/agency-service/service/agency-service.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
})
export class ServiceDetailsComponent implements OnInit {
  currentService: AgencyService | undefined = undefined;
  defaultImage: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private agencyServiceService: AgencyServiceService
  ) {
    this.defaultImage = '../../assets/default.png';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);

      this.agencyServiceService
        .getServiceById(params['id'])
        .subscribe((service) => {
          this.currentService = service;
        });
    });
  }

  handleDeleteService(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);

      this.agencyServiceService.deleteService(params['id']).subscribe(() => {
        this.router.navigate(['home']);
      });
    });
  }
}

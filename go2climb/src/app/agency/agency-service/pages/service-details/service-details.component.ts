import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AgencyService,
  ServiceReview,
} from 'src/app/agency/agency-service/models/AgencyService';
import { AgencyServiceService } from 'src/app/agency/agency-service/service/agency-service.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
})
export class ServiceDetailsComponent implements OnInit {
  userType =  sessionStorage.getItem('userType') as string;
  userId = sessionStorage.getItem('userid') as string;
  temp = 0;
  currentService: AgencyService | undefined = undefined;
  reviews: ServiceReview[] = [];
  defaultImage: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private agencyServiceService: AgencyServiceService
  ) {
    this.defaultImage = '../../assets/default.png';
  }

  ngOnInit(): void {
    this.temp = Number(this.userId)
    this.route.params.subscribe((params) => {
      console.log(params['id']);

      this.agencyServiceService
        .getServiceById(params['id'])
        .subscribe((service) => {
          this.currentService = {
            id: service.id,
            name: service.name,
            description: service.description,
            agency_id: service.agency.id,
            date: service.creationDate,
            img_url: service.photos,
            isOffer: Boolean(service.isOffer),
            location: service.location,
            price: service.price,
            priceOffer: service.newPrice,
            score: service.score,
            status: service.location,
            agency_name: service.agency.name,
            agency_img: service.agency.photo,
          };
        });

      this.agencyServiceService
        .getServicesReviewsById(params['id'])
        .subscribe((response) => (this.reviews = response.content));
    });
  }

  handleDeleteService(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);

      this.agencyServiceService
        .deleteService(params['id'], this.userId)
        .subscribe(() => {
          this.router.navigate(['home']);
        });
    });
  }

  handleGoToEdit(): void {
    this.router.navigate(['/add-service', this.currentService?.id]);
  }

  handleGoToPurchase(): void {
    this.router.navigate(['/purchase', this.currentService?.id]);
  }
}


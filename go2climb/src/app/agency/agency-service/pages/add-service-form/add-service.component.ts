import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyServiceService } from 'src/app/agency/agency-service/service/agency-service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent implements OnInit {
  userId = sessionStorage.getItem('userid') as string;

  serviceForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    location: '',
  });

  imageURLInput = new FormControl('');
  img_url: string | null = '../../../assets/user-icon.webp';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private agencyServiceService: AgencyServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params['id']) return;

      this.agencyServiceService
        .getServiceById(params['id'])
        .subscribe((service) => {
          const { name, description, price, location } = service;

          this.serviceForm.setValue({
            name,
            description,
            price: String(price),
            location,
          });
          this.img_url = service.photos;
        });
    });
  }

  addService() {
    console.log(this.serviceForm.value);
    this.agencyServiceService
      .addService(
        { ...this.serviceForm.value, img_url: this.img_url },
        this.userId
      )
      .subscribe(() => this.router.navigate(['/home']));
  }

  handleUploadPhoto() {
    this.img_url = this.imageURLInput.value;
  }
}

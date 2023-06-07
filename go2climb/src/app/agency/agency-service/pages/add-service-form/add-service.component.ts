import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyServiceService } from 'src/app/agency/agency-service/service/agency-service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent implements OnInit {
  serviceForm = this.formBuilder.group({
    title: '',
    description: '',
    price: '',
    place: '',
    date: '',
  });

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
          this.serviceForm.setValue(service);
        });
    });
  }

  addService() {
    console.log(this.serviceForm.value);
    this.agencyServiceService
      .addService(this.serviceForm.value)
      .subscribe(() => this.router.navigate(['/home']));
  }
}

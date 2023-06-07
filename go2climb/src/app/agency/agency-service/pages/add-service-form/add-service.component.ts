import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AgencyServiceService } from 'src/app/agency/agency-service/service/agency-service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent {
  constructor(
    private formBuilder: FormBuilder,
    private agencyServiceService: AgencyServiceService
  ) {}

  serviceForm = this.formBuilder.group({
    title: '',
    description: '',
    price: '',
    place: '',
    date: '',
  });

  addService() {
    console.log(this.serviceForm.value);
    this.agencyServiceService.addService(this.serviceForm.value);
  }
}

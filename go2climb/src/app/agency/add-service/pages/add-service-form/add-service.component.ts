import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddServiceService } from 'src/app/agency/add-service/service/add-service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent {
  constructor(
    private formBuilder: FormBuilder,
    private addServiceService: AddServiceService
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
    this.addServiceService.addService(this.serviceForm.value);
  }
}

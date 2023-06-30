import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { TouristHireService } from 'src/app/services/tourist-hire.service';




@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit{
  userId = sessionStorage.getItem('userid') as string;
  serviceId = '';

  serviceForm = this.formBuilder.group({
    amount: '',
    price: '',
    scheduledDate: '',
    status: 'Pending',
  });


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: TouristHireService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params['id']) return;
      this.serviceId = params['id'];
    });
  }

  hireService() {
    //console.log(this.serviceForm.value);
    this.service
      .postHire(this.serviceForm.value, this.userId, this.serviceId ,
      )
     .subscribe(() => {
      alert('Service Hired');
      this.router.navigate(['/home'])});
  }

}

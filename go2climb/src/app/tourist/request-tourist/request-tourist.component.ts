import {Component, OnInit} from '@angular/core';
import { hiredservice } from 'src/app/models/hiredservice';
import { HiredServiceService } from 'src/app/services/hired-service.service';
import {Iservice} from "../../models/service";
import {ServicesService} from "../../services/services-service.service";
import { Router } from '@angular/router';

interface Response {
  content: any[];
}

@Component({
  selector: 'app-request-tourist',
  templateUrl: './request-tourist.component.html',
  styleUrls: ['./request-tourist.component.css']
})
export class RequestTouristComponent implements OnInit {

  services: hiredservice[] = [];
  response: Response = {content: []}
  currentid: any
  value: any;

 constructor(private hiredServices: HiredServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.currentid = sessionStorage.getItem('userid')
    this.fetchServices();
  }

  fetchServices() {
    this.hiredServices.getHiredServiceByTouristId(this.currentid).subscribe((data) => {
        this.response = data;
        this.services = this.response.content;

    });
  }

  comment(id: number){
    this.router.navigate(['/comment/'+ id])
  }

}



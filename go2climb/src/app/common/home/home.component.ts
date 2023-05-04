import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {

  services: any[] = [1,2,3,4,5,6];
  value = '';
  userType: boolean = true;
  constructor() { }


  ngOnInit() {
  }

  serviceDetail(){
    console.log('servicedetail');
  }

  search(value: String){
    console.log('searching '+value);
  }

}



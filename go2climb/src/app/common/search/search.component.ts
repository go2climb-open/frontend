import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Iservice } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchWord : any;
  results: Iservice[] = [];

  max = 1000;
  min = 0;
  step = 1;
  minPrice = 0;
  maxPrice = 650;
  rating = 0;





  constructor(private route: ActivatedRoute, private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.getSearchResults();
  }

  getSearchResults() {
    this.searchWord = this.route.params.pipe(
      )
      this.searchWord = this.searchWord._value.text
    console.log(this.searchWord);

    return this.servicesService.searchService(this.searchWord)
    .subscribe(data => {
      this.results = data;
      console.log(this.results);
    })

  }



}



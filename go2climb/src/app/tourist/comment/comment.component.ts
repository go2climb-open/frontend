import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AgencyServiceService } from 'src/app/agency/agency-service/service/agency-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  userId = sessionStorage.getItem('userid') as string;
  serviceId = '';

  serviceForm = this.formBuilder.group({
    comment: '',
    date: '',
    score: '',
  });


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: AgencyServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params['id']) return;
      this.serviceId = params['id'];
    });
  }

  postComment() {
    //console.log(this.serviceForm.value);
    this.service
      .postReview(this.serviceId, this.userId,this.serviceForm.value
      )
     .subscribe(() => {
      alert('Comment posted succesfully');
      this.router.navigate(['/home'])});
  }
}

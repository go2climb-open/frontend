import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  types = ['tourist', 'agency'];
  typeSelect = ''

  //image?: "assethttps://as1.ftcdn.net/v2/jpg/01/51/15/00/1000_F_151150048_iw9b4g2EivCwQVWZCJC789zoYklr4Utc.jpg";

  constructor(private builder: FormBuilder, private service: AuthService,
              private router: Router) {
    sessionStorage.clear();

  }
  result: any;

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });


  proceedlogin() {
    if (this.loginform.valid) {
      this.service.GetUserByEmail(this.loginform.value.email).subscribe(item => {
        this.result = item;
        console.log(this.result)
        if (this.result[0].password === this.loginform.value.password) {
          sessionStorage.setItem('username',this.result[0].email);
          sessionStorage.setItem('userType',this.result[0].userType);
          console.log('aqui')
          this.router.navigate(['home']);
        }else {
          alert('error ')
        }
      });
    } else {
      alert('Please enter valid data.')
    }
  }

  placeRegister(){
    switch (this.typeSelect) {
      case 'tourist' : this.router.navigate(['sign-up-tourist']); break;
      case 'agency' : this.router.navigate(['sign-up-agency']); break;
    }
  }


}


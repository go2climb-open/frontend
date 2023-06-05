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

  constructor(private builder: FormBuilder, private service: AuthService,
              private router: Router) {
    sessionStorage.clear();

  }
  result: any;

  loginform = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.GetUserbyCode(this.loginform.value.id).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginform.value.password) {
          if (this.result.isactive) {
            sessionStorage.setItem('username',this.result.id);
            sessionStorage.setItem('role',this.result.role);
            this.router.navigate(['']);
          } else {
            alert('InActive User: Please contact Admin');
          }
        } else {
          alert('Invalid credentials');
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


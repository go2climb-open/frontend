import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

interface Type {
  value: string;
  viewValue: String;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(public builder: FormBuilder, private service: AuthService, private router: Router) {
    this.signUpForm = this.builder.group({
      email: this.builder.control('',Validators.compose([Validators.email, Validators.required])),
      password: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(8)])),
      name: this.builder.control('',Validators.compose([Validators.required])),
      phone: this.builder.control('',Validators.compose([Validators.required, Validators.maxLength(9)])),
      type: this.builder.control('',Validators.compose([Validators.required]))
    })
  }

  get email(){
    return this.signUpForm.controls['email'];
  }

  get password(){
    return this.signUpForm.controls['password'];
  }

  get name(){
    return this.signUpForm.controls['name'];
  }

  get phone(){
    return this.signUpForm.controls['phone'];
  }

  get type(){
    return this.signUpForm.controls['type'];
  }

  types: Type[] = [
    {value: 'agent', viewValue: 'Agent'},
    {value: 'turist', viewValue: 'Turist'},
  ]

  proceedregister() {
    if (this.signUpForm.valid) {
      this.service.RegisterUser(this.signUpForm.value).subscribe(result => {
        alert("Please contact admin for enable access.','Registered successfully")
        this.router.navigate(['login'])
      });
    } else {
      alert("Please enter valid data.")
    }
  }

  ngOnInit(): void {

  }

  cancelSignUp(){
    console.log("Cancelled")
  }
  signUp(){}
}

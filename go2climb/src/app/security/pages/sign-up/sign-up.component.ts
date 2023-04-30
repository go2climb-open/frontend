import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(public builder: FormBuilder) {
    this.signUpForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      agencyName: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(9)]],
      location: ['', [Validators.required]],
      ruc: ['', [Validators.required]]
    })
  }

  get email(){
    return this.signUpForm.controls['email'];
  }

  get password(){
    return this.signUpForm.controls['password'];
  }

  get agencyName(){
    return this.signUpForm.controls['agencyName'];
  }

  get phone(){
    return this.signUpForm.controls['phone'];
  }
  
  get location(){
    return this.signUpForm.controls['location'];
  }

  get ruc(){
    return this.signUpForm.controls['ruc'];
  }

  ngOnInit(): void {
      
  }

  cancelSignUp(){
    console.log("Cancelled")
  }
  signUp(){}
}

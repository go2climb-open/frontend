import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(public builder: FormBuilder) {
    this.signUpForm = this.builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(9)]],
      type: ['', [Validators.required]]
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

  ngOnInit(): void {

  }

  cancelSignUp(){
    console.log("Cancelled")
  }
  signUp(){}
}

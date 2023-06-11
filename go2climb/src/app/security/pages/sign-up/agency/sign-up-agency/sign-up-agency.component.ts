import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-agency',
  templateUrl: './sign-up-agency.component.html',
  styleUrls: ['./sign-up-agency.component.css']
})
export class SignUpAgencyComponent implements OnInit{
  signUpAgencyForm: FormGroup;

  constructor(public builder: FormBuilder, private service: AuthService, private router: Router) {
    this.signUpAgencyForm = this.builder.group({
      email: this.builder.control('',Validators.compose([Validators.email, Validators.required])),
      password: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(8)])),
      agencyName: this.builder.control('',Validators.compose([Validators.required])),
      phone: this.builder.control('',Validators.compose([Validators.required, Validators.maxLength(9)])),
      location: this.builder.control('',Validators.compose([Validators.required])),
      ruc: this.builder.control('',Validators.compose([Validators.required])),
      userType:'agency'
    })
  }

  get email(){
    return this.signUpAgencyForm.controls['email'];
  }

  get password(){
    return this.signUpAgencyForm.controls['password'];
  }

  get agencyName(){
    return this.signUpAgencyForm.controls['agencyName'];
  }

  get phone(){
    return this.signUpAgencyForm.controls['phone'];
  }

  get location(){
    return this.signUpAgencyForm.controls['location'];
  }

  get ruc(){
    return this.signUpAgencyForm.controls['ruc'];
  }

  proceedregister() {
    if (this.signUpAgencyForm.valid) {
      this.service.RegisterUser(this.signUpAgencyForm.value).subscribe(result => {
        alert("Please contact admin for enable access.','Registered successfully")
        this.router.navigate(['sign-in'])
      });
      console.log("im here baby")
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

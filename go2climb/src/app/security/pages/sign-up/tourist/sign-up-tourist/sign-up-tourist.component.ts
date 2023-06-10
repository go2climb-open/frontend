import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-tourist',
  templateUrl: './sign-up-tourist.component.html',
  styleUrls: ['./sign-up-tourist.component.css']
})
export class SignUpTouristComponent implements OnInit{
  signUpTouristForm: FormGroup;

  constructor(public builder: FormBuilder, private service: AuthService, private router: Router) {
    this.signUpTouristForm = this.builder.group({
      email: this.builder.control('',Validators.compose([Validators.email, Validators.required])),
      password: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(8)])),
      name: this.builder.control('',Validators.compose([Validators.required])),
      phone: this.builder.control('',Validators.compose([Validators.required, Validators.maxLength(9)])),
      location: this.builder.control('',Validators.compose([Validators.required]))
    })
  }

  get email(){
    return this.signUpTouristForm.controls['email'];
  }

  get password(){
    return this.signUpTouristForm.controls['password'];
  }

  get name(){
    return this.signUpTouristForm.controls['name'];
  }

  get phone(){
    return this.signUpTouristForm.controls['phone'];
  }

  get location(){
    return this.signUpTouristForm.controls['location'];
  }

  proceedregister() {
    if (this.signUpTouristForm.valid) {
      this.service.RegisterUser(this.signUpTouristForm.value).subscribe(result => {
        alert("Please contact admin for enable access.','Registered successfully")
        this.router.navigate(['sign-in'])
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
  signUp(){
    this.proceedregister()
  }
}

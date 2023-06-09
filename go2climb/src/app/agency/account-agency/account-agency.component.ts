import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-agency',
  templateUrl: './account-agency.component.html',
  styleUrls: ['./account-agency.component.css']
})
export class AccountAgencyComponent {
  agencyName: string = "My Agency";
  email: string = "myagency@gmail.com";
  phone: string = "123456789";
  location: string = "Lima, Peru";
  ruc: string = "12345678901";
  description: string = "We are a travel agency dedicated to providing the best experiences for our clients.";
  isEditable:boolean=false;


  selectedFile: File | undefined;
  image="https://i.pinimg.com/originals/1b/e3/d9/1be3d94da55cf6348014713835811b3b.jpg";


  constructor(private router: Router) { }

  redirectToChangePassword() {
    this.router.navigate(['/account-change-password']);
  }
  redirectToUpgradePlans(){
    this.router.navigate(['account-upgrade-plan']);
  }

  changeEditable() {
    this.isEditable = !this.isEditable;
  }
  onSaveClick() {
    this.isEditable=false;
  }




  uploadPhoto() {
    this.image = "";
    const fileInput = document.querySelector('input[type=file]') as HTMLInputElement;
    fileInput.click();

  }

  onFileSelected(event: any) {
    if(event.target.files){
      var reader=new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload=(event:any)=>{
        this.image=event.target.result
      }

    }

  }

}

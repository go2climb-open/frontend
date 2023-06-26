import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AgencyAccountService } from 'src/app/services/agency-account.service';

@Component({
  selector: 'app-account-agency',
  templateUrl: './account-agency.component.html',
  styleUrls: ['./account-agency.component.css']
})
export class AccountAgencyComponent implements OnInit{
  agency: any;

  originalAgency: any;

  // agencyName: string = "My Agency";
  // email: string = "myagency@gmail.com";
  // phone: string = "123456789";
  // location: string = "Lima, Peru";
   ruc: string = "12345678901";
   description: string = "We are a travel agency dedicated to providing the best experiences for our clients.";
   isEditable:boolean=false;
  //
   selectedFile: File | undefined;
   image="https://i.pinimg.com/originals/1b/e3/d9/1be3d94da55cf6348014713835811b3b.jpg";


  constructor(private agencyAccountService: AgencyAccountService,private router: Router) {
    this.agencyAccountService = agencyAccountService;
  }

  ngOnInit() {
    const userEmail = this.agencyAccountService.getEmail(); // Obtener el email del usuario desde el servicio
    this.getAgencyByUser(userEmail);
  }

  getAgencyByUser(email: string) {
    this.agencyAccountService.getAgencyByUser(email).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.agency = data[0];
        }
      },
      (error: any) => {
        console.error('Error al obtener la agencia:', error);
      }
    );
  }

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

  saveChanges() {
    // Llama al servicio AgencyAccountService para actualizar la agencia
    this.agencyAccountService.updateAgency(this.agency).subscribe(
      (data: any) => {
        console.log('Agencia actualizada:', data);
        this.originalAgency = { ...this.agency }; // Actualiza la copia de seguridad con los nuevos datos
        this.isEditable = false; // Deshabilita la edición
      },
      (error: any) => {
        console.error('Error al actualizar la agencia:', error);
      }
    );
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

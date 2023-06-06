import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { AccountAgencyComponent } from './agency/account-agency/account-agency.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './common/home/home.component';
import  { MatIconModule } from "@angular/material/icon";
import  { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './components/account/account.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import {AuthService} from "./security/service/auth.service";
import { SignUpTouristComponent } from './security/pages/sign-up/tourist/sign-up-tourist/sign-up-tourist.component';
import { SignUpAgencyComponent } from './security/pages/sign-up/agency/sign-up-agency/sign-up-agency.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ForgotPasswordComponent } from './security/pages/forgot-password/forgot-password.component';
import {MatStepperModule} from "@angular/material/stepper";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountAgencyComponent,
    HomeComponent,
    AccountComponent,
    SignInComponent,
    SignUpTouristComponent,
    SignUpAgencyComponent,
    ForgotPasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

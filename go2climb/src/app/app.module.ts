import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AccountAgencyComponent } from './agency/account-agency/account-agency.component';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './common/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './components/account/account.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { AuthService } from './security/service/auth.service';
import { ChangePasswordComponent } from './agency/change-password/change-password.component';
import { MatStepperModule } from '@angular/material/stepper';
import { UpgradePlansComponent } from './agency/upgrade-plans/upgrade-plans.component';
import { PaymentDetailsComponent } from './agency/payment-details/payment-details.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { AddServiceComponent } from './agency/add-service/pages/add-service-form/add-service.component';
import { AddServiceService } from 'src/app/agency/add-service/service/add-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountAgencyComponent,
    SignUpComponent,
    HomeComponent,
    AccountComponent,
    SignInComponent,
    ChangePasswordComponent,
    UpgradePlansComponent,
    PaymentDetailsComponent,
    PageNotFoundComponent,
    AddServiceComponent,
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
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    MatStepperModule,
  ],
  providers: [AuthService, MatDatepickerModule, AddServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

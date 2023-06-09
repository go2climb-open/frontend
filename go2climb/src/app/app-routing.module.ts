import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { HomeComponent } from './common/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { AccountAgencyComponent } from './agency/account-agency/account-agency.component';
import {SignUpTouristComponent} from "./security/pages/sign-up/tourist/sign-up-tourist/sign-up-tourist.component";
import {SignUpAgencyComponent} from "./security/pages/sign-up/agency/sign-up-agency/sign-up-agency.component";
import {ForgotPasswordComponent} from "./security/pages/forgot-password/forgot-password.component";
import {ChangePasswordComponent} from "./agency/change-password/change-password.component";
import {UpgradePlansComponent} from "./agency/upgrade-plans/upgrade-plans.component";
import { SearchComponent } from './common/search/search.component';
import {PaymentDetailsComponent} from "./agency/payment-details/payment-details.component";
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";




const routes: Routes = [
  {path: 'sign-in',  component: SignInComponent},
  {path: '',  component: SignInComponent},
  {path: 'sign-up-tourist',  component: SignUpTouristComponent},
  {path: 'sign-up-agency',  component: SignUpAgencyComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'home',  component: HomeComponent},
  {path: 'account',  component: AccountComponent},
  {path: 'account-agency',  component: AccountAgencyComponent},
  {path: 'account-change-password',  component: ChangePasswordComponent},
  {path:'account-upgrade-plan', component:UpgradePlansComponent},
  {path: 'search/:text', component: SearchComponent},
  {path:'account-payment-details', component:PaymentDetailsComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

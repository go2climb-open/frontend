import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import { HomeComponent } from './common/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { AccountAgencyComponent } from './agency/account-agency/account-agency.component';
import { ChangePasswordComponent } from './agency/change-password/change-password.component';
import { UpgradePlansComponent } from './agency/upgrade-plans/upgrade-plans.component';
import { PaymentDetailsComponent } from './agency/payment-details/payment-details.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { AddServiceComponent } from 'src/app/agency/add-service/pages/add-service-form/add-service.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'account-agency', component: AccountAgencyComponent },
  { path: 'account-change-password', component: ChangePasswordComponent },
  { path: 'account-upgrade-plan', component: UpgradePlansComponent },
  { path: 'account-payment-details', component: PaymentDetailsComponent },
  { path: 'add-service', component: AddServiceComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

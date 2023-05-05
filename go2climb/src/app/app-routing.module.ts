import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { SignUpComponent } from './security/pages/sign-up/sign-up.component';
import { HomeComponent } from './common/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { AccountAgencyComponent } from './agency/account-agency/account-agency.component';



const routes: Routes = [
  {path: 'sign-in',  component: SignInComponent},
  {path: '',  component: SignInComponent},
  {path: 'sign-up',  component: SignUpComponent},
  {path: 'home',  component: HomeComponent},
  {path: 'account',  component: AccountComponent},
  {path: 'account-agency',  component: AccountAgencyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

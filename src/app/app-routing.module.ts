import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerHiComponent } from './Components/banner-hi/banner-hi.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'SignIn' , component:SignInComponent},
  { path: 'SignUp', component:SignUpComponent},
  { path: '', redirectTo:'/SignIn', pathMatch:'full'},
  { path: 'Home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

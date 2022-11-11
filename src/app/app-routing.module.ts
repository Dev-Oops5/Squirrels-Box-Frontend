import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerHiComponent } from './Components/banner-hi/banner-hi.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { BoxComponent } from './Components/box/box.component';
import { SectionComponent } from './Components/section/section.component';
import { SectionObjectComponent } from './Components/section-object/section-object.component';

const routes: Routes = [
  { path: 'SignIn' , component:SignInComponent},
  { path: 'SignUp', component:SignUpComponent},
  { path: '', redirectTo:'/SignIn', pathMatch:'full'},
  { path: 'Home', component:HomeComponent},
  { path: 'Box', component:BoxComponent},
  { path: 'Section', component:SectionComponent},
  { path: 'Object', component:SectionObjectComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

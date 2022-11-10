import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { BoxComponent } from './box/box.component';
import { AddBoxComponent } from './add-box/add-box.component';

const routes: Routes = [
  { path: 'SignIn' , component:SignInComponent},
  { path: 'SignUp', component:SignUpComponent},
  { path: 'Box', component:BoxComponent},
  { path: 'add-box', component:AddBoxComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

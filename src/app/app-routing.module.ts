import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddSectionComponent } from './add-section/add-section.component';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';


const routes: Routes = [
  {path: 'add-section', component: AddSectionComponent},
  {path: 'edit-section', component: EditSectionComponent},
  { path: 'SignIn' , component:SignInComponent},
  { path: 'SignUp', component:SignUpComponent},


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

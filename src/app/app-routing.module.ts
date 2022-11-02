import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerHiComponent } from './banner-hi/banner-hi.component';
import { AddSectionComponent } from './add-section/add-section.component';

const routes: Routes = [
  {path: '', component: BannerHiComponent},
  {path: 'add-section', component: AddSectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

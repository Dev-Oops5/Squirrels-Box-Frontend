import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerHiComponent } from './banner-hi/banner-hi.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { AddSectionComponent } from './add-section/add-section.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerHiComponent,
    HeaderComponent,
    SectionComponent,
    AddSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

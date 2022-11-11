import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignInComponent } from './Components/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './Components/sign-up/sign-up.component'

import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import {HttpClientModule} from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from 'src/environments/environment';

import { BannerHiComponent } from './Components/banner-hi/banner-hi.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,

    SignInComponent,
    SignUpComponent,

    BannerHiComponent,
    HeaderComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

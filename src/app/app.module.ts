import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { UsersComponent } from './private/users/users.component';
import { CreditsComponent } from './private/credits/credits.component';
import { UserService, CreditService } from './services';
import { ApiUser } from './api/apiUser';
import { ApiCredit } from './api/apiCredit';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublicComponent,
    HomeComponent,
    UsersComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
   providers: [
     ApiUser,
     ApiCredit,
     UserService,
     CreditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

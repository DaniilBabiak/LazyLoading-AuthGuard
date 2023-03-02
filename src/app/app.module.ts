import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {NotFoundComponent} from "./Components/not-found/not-found.component";
import {LoginComponent} from "./Components/login/login.component";
import {ForgotPasswordComponent} from "./Components/forgot-password/forgot-password.component";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


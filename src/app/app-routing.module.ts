import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {ForgotPasswordComponent} from "./Components/forgot-password/forgot-password.component";
import {NotFoundComponent} from "./Components/not-found/not-found.component";

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'forgot-password', component:ForgotPasswordComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {ForgotPasswordComponent} from "./Components/forgot-password/forgot-password.component";
import {NotFoundComponent} from "./Components/not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";
import {NotAuthorizedGuard} from "./guards/not-authorized.guard";

const routes: Routes = [
  {path: 'login', canActivate: [NotAuthorizedGuard], component:LoginComponent},
  {path: 'forgot-password', component:ForgotPasswordComponent},
  {path: '', redirectTo:'admin', pathMatch: 'full'},
  {path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

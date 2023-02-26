import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {AdminDashboardComponent} from "./Components/admin-dashboard/admin-dashboard.component";
import {HeaderComponent} from "./Components/header/header.component";
import {HomeComponent} from "./Components/home/home.component";
import {ServicesComponent} from "./Components/services/services.component";
import {ContactComponent} from "./Components/contact/contact.component";
import {FooterComponent} from "./Components/footer/footer.component";
import {AboutComponent} from "./Components/about/about.component";


@NgModule({
  declarations: [AdminDashboardComponent,
    HeaderComponent, FooterComponent,
    HomeComponent, ContactComponent,
    ServicesComponent, AboutComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}

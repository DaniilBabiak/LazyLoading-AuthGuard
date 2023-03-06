import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Pagination} from "./services/pagination";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [Pagination],
  exports: [],
})
export class SharedModule { }

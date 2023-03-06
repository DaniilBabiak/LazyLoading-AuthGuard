import { Component, OnInit } from '@angular/core';
import {Pagination} from "../../../../shared/services/pagination";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public p:Pagination) { }

  ngOnInit(): void {

  }

}

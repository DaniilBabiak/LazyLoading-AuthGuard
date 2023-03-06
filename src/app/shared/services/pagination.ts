import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class Pagination {

  page:number = 1;
  count:number = 0;
  tableSize:number = 10;
  url:string = 'https://jsonplaceholder.typicode.com/posts';
  getJsonValue:any;
  isClicked = false

  constructor(private http:HttpClient) { }

  getUser(){
    let result = this.http.get(this.url).subscribe((data) => {
      this.getJsonValue = data
      console.log(this.getJsonValue)
      this.isClicked = !this.isClicked;
    });
  }

  onTableDataChange(event:any){
    this.page = event;
  }
}

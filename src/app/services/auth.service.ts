import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setToken(token:string): void{
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
}
 isLoggedIn(){
    return this.getToken() != null;
 }
 logout(){
    localStorage.removeItem('token');
   this.router.navigate(['login']);
 }
 login({email, password}: any):Observable<any>{

   return new Observable<any>((observer) =>{
     if (email === 'admin@gmail.com' && password === 'admin123'){
       this.setToken('abcdefghjklmnopqrstuvwxyz');
       observer.next({name: 'Daniil', email: 'admin@gmail.com'});
     }
     else {
       observer.error(new Error('Failed to Login'))
     }
     observer.complete();
   })
 }
}

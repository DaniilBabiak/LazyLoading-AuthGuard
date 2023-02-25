import { Component, OnInit } from '@angular/core';
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {catchError, finalize, map, of} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth:AuthService, private router:Router) { }
  private handleError(reply: any) {}
  ngOnInit(): void {
  }
  onSubmit():void{
    console.log('start')
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
        /*.pipe(

          catchError((err:any) => of((err:any) =>{
            alert(err);
          })),
          finalize(()=>{
            console.log('request finished')
          })
        )*/.subscribe((data:any) =>{
        this.router.navigate(['admin']);
      });
    }
  }

}

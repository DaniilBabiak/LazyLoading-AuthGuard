import { Component, OnInit } from '@angular/core';
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

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


  // When a user tries to go to the 'login' page, but they are already registered, they will automatically be redirected to 'admin'.

  ngOnInit(): void {
  /*  if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }*/
  }

  onSubmit():void{
    console.log('start')
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value)
        .subscribe((data:any) =>{
        this.router.navigate(['admin']);
      });
    }
  }

}

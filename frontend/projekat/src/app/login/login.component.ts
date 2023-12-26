import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthToken } from '../selectors/login.selector';
import { Router } from '@angular/router';
import { loginAction, loginActionSuccess } from '../actions/login.action';
import { UserService } from '../services/user.service';
import { concatWith } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  vrednostUsername:string;
  vrednostPassword:string;
  vrednostName:string;
  vrednostEmail:string;
  vrednostUsernameReg:string;
  vrednostPasswordReg:string;
  vrednostPhoneNumber:string;
  vrednostDate:string;
  vrednostJMBG:string;
  tokenUser:string|null;
  ngOnInit(): void {
    this.store.select(selectAuthToken).subscribe((token)=>{
      this.tokenUser=token;
    })
  }
  constructor(private http:HttpClient,
    private store:Store,
    private router:Router,
    private userService:UserService,
    private loginService:LoginService){
    this.vrednostUsername="";
    this.vrednostPassword="";
    this.tokenUser="";
    this.vrednostName="";
    this.vrednostEmail="";
    this.vrednostUsernameReg="";
    this.vrednostPasswordReg="";
    this.vrednostPhoneNumber="";
    this.vrednostDate="";
    this.vrednostJMBG="";
  }
  login()
  {
    this.loginService.login(this.vrednostUsername,this.vrednostPassword);
  }
  register()
  {
    this.userService.registerUser(this.vrednostName,this.vrednostEmail,this.vrednostUsernameReg,this.vrednostPasswordReg,this.vrednostPhoneNumber,this.vrednostJMBG);
  }
}

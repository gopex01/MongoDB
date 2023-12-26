import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginActionSuccess } from '../actions/login.action';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogErrorLoginComponent } from '../dialog-error-login/dialog-error-login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headers:HttpHeaders;
  route:string;
  constructor(private httpClient:HttpClient,
    private store:Store,
    private router:Router,
    private dialog:MatDialog)
  { 
    this.route="http://localhost:3000/auth/login";
    this.headers=new HttpHeaders({
      'Content-Type':'application/json'
    });
  }
  login(username:string,password:string)
  {
    const data={
      username:username,
      password:password
    }
    this.httpClient.post(this.route,data,{headers:this.headers}).subscribe((x:any)=>{
      this.store.dispatch(loginActionSuccess({token:x.access_token,username:x.username}));
      if(x.rola=="user"){
        this.router.navigate(['/Profile']);
      }
      if(x.rola=="bc"){
        this.router.navigate(['/BCProfile']);
      }
      if(x.rola=="admin"){
        this.router.navigate(['/AdminProfile']);
      }
    },(error)=>{this.dialog.open(DialogErrorLoginComponent);}
    );
   
  }
}

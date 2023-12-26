import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthToken, selectUsername } from '../selectors/login.selector';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogErrorAllComponent } from '../dialog-error-all/dialog-error-all.component';
import { selectUserId } from '../selectors/user-info.selector';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  idUser:number|undefined;
  route:string;
  username:string;
  headers:HttpHeaders=new HttpHeaders();
  constructor(private store:Store,
  private httpClient:HttpClient,
  private dialog:MatDialog) 
  { 
    this.route="http://localhost:3000/Notification/";
    this.store.select(selectAuthToken).subscribe((token)=>{
      console.log(token);
      this.headers=new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`,
      });
    });
    this.username="";
    this.idUser=0;
  }
  getNotifications()
  {
    this.store.select(selectUsername).subscribe((x)=>{
      this.username=x;
    });
    this.store.select(selectUserId).subscribe(async (x)=>{
      this.idUser=x;
      console.log("User id je "+x);
    })
    return this.httpClient.get(this.route+`getPersonalNotifications/${this.idUser}`,{headers:this.headers})
   // return this.httpClient.get(this.route+`getNot/${this.username}`,{headers:this.headers});
  }
  markAsRead(notId:number)
  {
    console.log(this.route+`readNot/${notId}`);
    this.httpClient.patch(this.route+`readNot/${notId}`,{},{headers:this.headers}).subscribe((x)=>{
      console.log(x);
    },(error:any)=>{
      this.dialog.open(DialogErrorAllComponent);
    });
    
  }
}

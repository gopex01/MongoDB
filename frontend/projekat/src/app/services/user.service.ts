import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationSuccessDialogComponent } from '../registration-success-dialog/registration-success-dialog.component';
import { Store } from '@ngrx/store';
import { selectAuthToken } from '../selectors/login.selector';
import { updateState } from '../actions/login.action';
import { selectUsername } from '../selectors/login.selector';
import { DialogSuccessRegistrationComponent } from '../dialog-success-registration/dialog-success-registration.component';
import { DialogErrorAllComponent } from '../dialog-error-all/dialog-error-all.component';
import { DialogSuccessDeletedAccountComponent } from '../dialog-success-deleted-account/dialog-success-deleted-account.component';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username:string='';
  route:string;
  headers:HttpHeaders=new HttpHeaders();
  constructor(private httpClient:HttpClient,
    private dialog:MatDialog,
    private store:Store,
    private router:Router)
    { 
      this.route='http://localhost:3000/User/';
      this.store.select(selectAuthToken).subscribe((token)=>{
        this.headers=new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': `Bearer ${token}`,
        })
      })
    }
  getStudentData():Observable<any>
  {
    return this.store.select(selectUsername)
    .pipe(
      switchMap(username =>
        this.httpClient.get(`http://localhost:3000/User/getOneUser/${username}`,{headers:this.headers})
      ),
    );
  }
  setUsername(username:string):void{
    this.username=username;
  }
  getUsername():string{
    return this.username;
  }
  registerUser(name:string,email:string,username:string,pass:string,phone:string,jmbg:string)
  {
    const data={
      NameAndSurname:name,
      Email:email,
      Username:username,
      Password:pass,
      PhoneNumber:phone,
      DateOfBirth:'2004-05-14 01:00:00',
      JMBG:jmbg,
      role:""
    }
    let resp=this.httpClient.post('http://localhost:3000/User/addUser',data,{headers:this.headers}).subscribe((x:any)=>{
      if(x.message='Success')
      {
         this.dialog.open(DialogSuccessRegistrationComponent);
      }
   });
    console.log("Resp"+resp);
  }
  deactivateAccount(password:string)
  {
    this.store.select(selectUsername).subscribe((username)=>{
      this.httpClient.delete(this.route+`deactivateAccount/${username}/${password}`,{headers:this.headers}).subscribe((response:any)=>{
        if(response.message=='success')
        {
          this.dialog.open(DialogSuccessDeletedAccountComponent);
          this.router.navigate(['/'])
          
        }
        else{
          this.dialog.open(DialogErrorAllComponent);
        }
      },error=>{
        this.dialog.open(DialogErrorAllComponent);
      })
    })
  }
  changeName(name:string)
  {
    this.store.select(selectUsername).subscribe((username)=>{
    this.httpClient.patch(this.route+`updateName/${name}/${username}`,{},{headers:this.headers})
    .subscribe(resp=>{
      console.log(resp);
    }),(error: any)=>{
        this.dialog.open(DialogErrorAllComponent);
      }
    })
  }
  changeEmail(email:string)
  { 
    this.store.select(selectUsername).subscribe((username)=>{
      this.httpClient.patch(this.route + `updateEmail/${email}/${username}`, {}, { headers: this.headers })
      .subscribe(response => {
        console.log('Uspešno izvršen HTTP zahtev:', response);
      }, error => {
        this.dialog.open(DialogErrorAllComponent);
      });
    })
    }
  changePhone(phone:string)
  {
    this.store.select(selectUsername).subscribe((username)=>{
    this.httpClient.patch(this.route + `updatePhoneNumber/${phone}/${username}`, {}, { headers: this.headers })
    .subscribe(response => {
      console.log('Uspešno izvršen HTTP zahtev:', response);
    }, error => {
      this.dialog.open(DialogErrorAllComponent);
    });
  });
  }
  changeUsername(newUsername:string)
  {
    this.store.select(selectUsername).subscribe((username)=>{
    this.httpClient.patch(this.route+`updateUserName/${newUsername}/${username}`,{},{headers:this.headers})
    .subscribe(resp=>{
      console.log(resp)
    }),(error: any)=>{
      this.dialog.open(DialogErrorAllComponent);
    }
  })
    this.store.select(selectAuthToken).subscribe((x)=>{
      this.store.dispatch(updateState({token:x!,username:newUsername}));
    })
  }
  getAllUsers()
  {
    return this.httpClient.get(this.route+'getAllUsers',{headers:this.headers});
  }
}

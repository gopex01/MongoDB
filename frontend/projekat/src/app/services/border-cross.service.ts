import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BorderCross } from '../models/border-cross.model';
import { Store } from '@ngrx/store';
import { selectAuthToken, selectUsername } from '../selectors/login.selector';
import { MatDialog } from '@angular/material/dialog';
import { DialogSuccessBcComponent } from '../dialog-success-bc/dialog-success-bc.component';
import { DialogSuccessCrossedBcComponent } from '../dialog-success-crossed-bc/dialog-success-crossed-bc.component';
import { DialogErrorAllComponent } from '../dialog-error-all/dialog-error-all.component';
import { DialogSuccessDeletedBcComponent } from '../dialog-success-deleted-bc/dialog-success-deleted-bc.component';

@Injectable({
  providedIn: 'root'
})
export class BorderCrossService {

  username:string="";
  route:string="http://localhost:3000/BorderCross/";
  headers:HttpHeaders=new HttpHeaders();
  constructor(private httpClient:HttpClient,
  private store:Store,
  private dialog:MatDialog) 
  {
    this.store.select(selectAuthToken).subscribe((token)=>{
      this.headers=new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`,
      })
    })
  }

  getAllBC():Observable<BorderCross[]>
  {
    console.log('getall');
    return this.httpClient.get<BorderCross[]>('http://localhost:3000/BorderCross/getAllBC');
  }
  getOneBC()
  {
    this.store.select(selectUsername).subscribe((x)=>{
      this.username=x;
    });
    return this.httpClient.get(this.route+`getOneBC/${this.username}`,{headers:this.headers});
  }
  checkTerm(idTerm:number,isCrossed:string,isComeBack:string,irreg:string)
  {
    return this.httpClient.patch(this.route+`checkTerm/${idTerm}/${isCrossed}/${isComeBack}/${irreg}`,{},{headers:this.headers})
    .subscribe(response=>{
      this.dialog.open(DialogSuccessCrossedBcComponent);
    },error=>{
      console.error("Doslo je do greske",error);
    });
  }
  deleteBC(name:string)
  {
    const nameencoded=encodeURIComponent(name);
    console.log(nameencoded);
    return this.httpClient.delete(this.route+`deleteBC/${nameencoded}`,{headers:this.headers})
    .subscribe((response:any)=>{
      if(response.message=='success')
      {
        this.dialog.open(DialogSuccessDeletedBcComponent);
      }
      else{
        this.dialog.open(DialogErrorAllComponent);
      }
    },error=>{
      //neuspesno
      this.dialog.open(DialogErrorAllComponent);
    });
  }
  addBC(newBC:BorderCross)
  {
    console.log(newBC);
    return this.httpClient.post(this.route+`addBC`,newBC,{headers:this.headers}).subscribe(resp=>{
      this.dialog.open(DialogSuccessBcComponent);
    },error=>{
      console.error('greska',error);
    });
    
  }
}

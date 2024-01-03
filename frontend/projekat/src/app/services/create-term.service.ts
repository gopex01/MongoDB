import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TermState } from '../reducers/create-term.reducer';
import { selectBorderCross, selectTermState } from '../selectors/create-term.selector';
import { selectAuthToken, selectUsername } from '../selectors/login.selector';
import { selectUserId } from '../selectors/user-info.selector';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTermService {

  headers:HttpHeaders=new HttpHeaders();
  idUser:number|undefined;
  username:string;
  route:string;
  constructor(private httpClient:HttpClient,private store:Store) 
  {
    this.store.select(selectAuthToken).subscribe((token)=>{
      this.headers=new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`,
      })
    });
    this.username="";
    this.route="http://localhost:3000/Term/";
  }

  createTerm()
  {
   
    let obj:any;
    let prelaz:any;
    this.store.pipe(select(selectTermState)).subscribe((termState:TermState)=>{
      obj=termState;
      console.log(obj);
    });
    this.store.pipe(select(selectBorderCross)).subscribe((BorderCross)=>{
      prelaz=BorderCross;
      console.log(prelaz);
    });
    return this.store.select(selectUserId).pipe(
      switchMap(p=>this.httpClient.post(this.route+`addTerm/${p}/${prelaz}`,obj,{headers:this.headers}))
    )
   
    return this.httpClient.post(this.route+`addTerm/${this.idUser}/${prelaz}`
      ,obj,{headers:this.headers});
   
  }
  getAllTerms()
  {
    this.store.pipe(select(selectUsername)).subscribe((username:string)=>{
      this.username=username;
    })
    return this.httpClient.get(this.route+`getTerms/${this.username}`,{headers:this.headers});
  }
  getPersonalTerms()
  {
    this.store.pipe(select(selectUsername)).subscribe((username:string)=>{
      this.username=username;
    });
    this.store.pipe(select(selectUserId)).subscribe(async(x)=>{
      this.idUser=x;
    })
    return this.httpClient.get(this.route+`getTermsOfUser/${this.idUser}`,{headers:this.headers});
  }
  acceptTerm(idNot:number)
  {
      return this.httpClient.patch(this.route+`acceptTerm/${idNot}/${true}`,{},{headers:this.headers}).subscribe((resp:any)=>{
        if(resp.message=='success')
        {
          console.log('uspeh');
          //dodaj dialog
        }
        else{
          //error dialog
        }
      },error=>{
        //error dialog
      });
  }
  declineTerm(idNot:number)
  {
    return this.httpClient.patch(this.route+`acceptTerm/${idNot}/${false}`,{},{headers:this.headers}).subscribe((resp:any)=>{
      if(resp.message=='success')
      {
        console.log('uspeh');
        //dodaj dialog
      }
      else{
        //error dialog
      }
    },error=>{
      //error dialog
    })
  }
}

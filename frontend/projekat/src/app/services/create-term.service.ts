import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TermState } from '../reducers/create-term.reducer';
import { selectBorderCross, selectTermState } from '../selectors/create-term.selector';
import { selectAuthToken, selectUsername } from '../selectors/login.selector';

@Injectable({
  providedIn: 'root'
})
export class CreateTermService {

  headers:HttpHeaders=new HttpHeaders();
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
   
    let obj;
    let prelaz;
    this.store.pipe(select(selectUsername)).subscribe((username:string)=>{
      this.username=username;
    });
    this.store.pipe(select(selectTermState)).subscribe((termState:TermState)=>{
      obj=termState;
      console.log(obj);
    });
    this.store.pipe(select(selectBorderCross)).subscribe((BorderCross)=>{
      prelaz=BorderCross;
      console.log(prelaz);
    });
    
   
    return this.httpClient.post(this.route+`addTerm/${this.username}/${prelaz}`
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
    return this.httpClient.get(this.route+`getPersonalTerms/${this.username}`,{headers:this.headers});
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

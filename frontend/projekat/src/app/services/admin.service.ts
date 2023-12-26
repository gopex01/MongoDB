import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.model';
import { Observable, forkJoin, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthToken } from '../selectors/login.selector';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  route:string;
  headers:HttpHeaders=new HttpHeaders();
  constructor(private httpClient:HttpClient,
  private store:Store)
  {
    this.store.select(selectAuthToken).subscribe((token)=>{
      this.headers=new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `Bearer ${token}`,
      })
    });
    this.route="http://localhost:3000/";
  }
  getData(): Observable<Admin> {
    return forkJoin([
      this.httpClient.get(this.route + `User/getNumOfUsers`,{headers:this.headers}),
      this.httpClient.get(this.route + `Term/getNumOfTerms`,{headers:this.headers}),
      this.httpClient.get(this.route + `BorderCross/getNumOfBC`,{headers:this.headers})
    ]).pipe(
      map((data: any[]) => {
        let numUsers: number = data[0];
        let numTerms: number = data[1];
        let numBC: number = data[2];
  
        return {
          numOfUsers: numUsers,
          numOfTerms: numTerms,
          numOfBC: numBC
        };
      })
    );
  }
  
  
}

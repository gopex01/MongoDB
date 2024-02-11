import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BehaviorSubject, Subject, switchMap, tap } from 'rxjs';
import { selectUserId } from '../selectors/user-info.selector';
import { MatDialog } from '@angular/material/dialog';
import { DialogSuccessCreatedReviewComponent } from '../dialog-success-created-review/dialog-success-created-review.component';
import { DialogErrorAllComponent } from '../dialog-error-all/dialog-error-all.component';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private readonly route:string = "http://localhost:3000/";
  public review$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public reviewOb$ = this.review$.pipe(
    switchMap(p => this.httpClient.get(this.route+`Review/getNotVerifiedReviews`)),
  )

  
  headers:HttpHeaders;
  constructor(private httpClient:HttpClient,private store:Store,private dialog:MatDialog)
  {
    this.headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getNewData() {
    this.review$.next("getData");
  }

  getData()
  {
    //return this.httpClient.get(this.route+`Review/getNotVerifiedReviews`);
    return this.reviewOb$;
  }
  verifyReview(id:number,answer:string)
  {
    //return this.httpClient.patch(this.route+`Review/verifyReview/${id}/${answer}`,{},{headers:this.headers}).subscribe((x)=>console.log(x));
    this.httpClient.patch(this.route+`Review/verifyReview/${id}/${answer}`,{},{headers:this.headers})
    .pipe(
      tap(p => this.review$.next("verifyReview")),
    )
    .subscribe((x)=>console.log(x));
  }
  getBCReview(idBC:number)
  {
    return this.httpClient.get(this.route+`Review/getReviewsByBC/${idBC}`,{headers:this.headers});
  }
  like(idReview:number)
  {
    this.httpClient.patch(this.route+`Review/likeReview/${idReview}`,{},{headers:this.headers}).subscribe((x)=>console.log(x));
  }
  createReview(vrednostComment:string,vrednostRating:number,bcname:any)
  {
    let obj={
      comment:vrednostComment,
      rate:vrednostRating
    };
    this.store.pipe(select(selectUserId)).subscribe(x=>{
      this.httpClient.post(this.route+`Review/addReview/${x}/${bcname}`,obj,{headers:this.headers}).subscribe((p:any)=>{
        if(p.userId!=undefined && p.borderCrossId!=undefined )
        {
          this.dialog.open(DialogSuccessCreatedReviewComponent);
        }
        else{
          this.dialog.open(DialogErrorAllComponent);
        }
      });
    })
    
  }

}

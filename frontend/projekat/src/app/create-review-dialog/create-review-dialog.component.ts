import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewService } from '../services/review.service';
import { Observable } from 'rxjs';
import { BorderCross } from '../models/border-cross.model';
import { getBCFromBase } from '../actions/border-cross.action';
import { Store } from '@ngrx/store';
import { selectAllBC } from '../selectors/border-cross.selector';

@Component({
  selector: 'app-create-review-dialog',
  templateUrl: './create-review-dialog.component.html',
  styleUrls: ['./create-review-dialog.component.css']
})
export class CreateReviewDialogComponent implements OnInit{

  vrednostComment:string;
  vrednostRating:number;
  arrBC$:Observable<BorderCross[]|null>;
  selectedBorderCross:BorderCross|null;
  constructor(private dialog:MatDialog,private reviewService:ReviewService,private store:Store)
  {
    this.vrednostComment='';
    this.vrednostRating=0;
    this.arrBC$=new Observable<BorderCross[]|null>();
    this.selectedBorderCross=null;
  }
  ngOnInit(): void {
    this.store.dispatch(getBCFromBase());
    this.arrBC$=this.store.select(selectAllBC);
  }

  create()
  {
    this.reviewService.createReview(this.vrednostComment,this.vrednostRating,this.selectedBorderCross);
  }
  onBorderCrossSelected()
  {

  }
}

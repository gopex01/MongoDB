import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';
import { ObserversModule } from '@angular/cdk/observers';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit{

  arrReview$:Observable<any>;
  constructor(private reviewService:ReviewService)
  {
    this.arrReview$=new Observable<Review[]>();
  }
  ngOnInit(): void {
    this.arrReview$=this.reviewService.getData();
  }
} 

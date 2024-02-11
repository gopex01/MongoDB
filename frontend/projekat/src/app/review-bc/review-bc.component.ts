import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../models/review.model';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review-bc',
  templateUrl: './review-bc.component.html',
  styleUrls: ['./review-bc.component.css']
})
export class ReviewBcComponent implements OnInit{

  @Input()
  review:Review|null;
  constructor(private reviewService:ReviewService)
  {
    this.review=null;
  }
  ngOnInit(): void {
  }
  like()
  {
    this.reviewService.like(this.review!.id);
    this.review!.numberOfLikes++;
  }
  
}

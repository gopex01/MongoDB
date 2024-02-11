import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../models/review.model';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent  implements OnInit{
  @Input()
  review:Review|null;;
  ngOnInit(): void {
  }
  constructor(private reviewService:ReviewService)
  {
    this.review=null;
  }
  accept()
  {
    console.log('acc');
    this.reviewService.verifyReview(this.review!.id,'yes');
  }
  decline()
  {
    this.reviewService.verifyReview(this.review!.id,'no');
  }

}

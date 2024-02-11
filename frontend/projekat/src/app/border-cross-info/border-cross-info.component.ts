import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBCState } from '../selectors/border-cross.selector';
import { BCState } from '../reducers/border.cross.reducer';
import { BorderCross } from '../models/border-cross.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { selectUserInfo } from '../selectors/user-info.selector';
import { Review } from '../models/review.model';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-border-cross-info',
  templateUrl: './border-cross-info.component.html',
  styleUrls: ['./border-cross-info.component.css']
})
export class BorderCrossInfoComponent implements OnInit{

  slickCarouselConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // Vreme trajanja svakog slajda u milisekundama
  };
  selectedImage:string="";
  images:string[]=[];
  bcName:string="";
  selectedBC:any;

  isUserLoged$: Observable<boolean> = new Observable<boolean>();
  arrReview$:Observable<any>;

  constructor(private store:Store,
    private route:ActivatedRoute,
    private reviewService:ReviewService)
  {
    this.selectedBC=null;
    this.route.queryParams.subscribe(params=>{
      this.bcName=params['name'];
    });
    this.arrReview$=new Observable<Review[]>();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.bcName=params['name'];
    });
    this.store.pipe(select(selectBCState)).subscribe((currentState:BCState)=>{
      this.selectedBC=currentState.arrBc.find(bc=>bc.name==this.bcName);
      if(this.selectedBC)
      {
        console.log(this.selectedBC);
        this.arrReview$=this.reviewService.getBCReview(this.selectedBC.username);
        for(let i=1;i<=5;i++){
          
        this.images.push(`../../assets/images/${this.bcName}${i}.jpeg`);
        }
        console.log(this.images);
        this.selectedImage=this.images[0];
      }
    });

    this.isUserLoged$ = this.store.select(selectUserInfo)
    .pipe(
      map(p => p ? true : false),
    );
  }
  previousImage()
  {
    const currentIndex = this.images.indexOf(this.selectedImage);
    const previousIndex = (currentIndex - 1 + this.images.length) % this.images.length;
    this.selectedImage = this.images[previousIndex];
  }
  nextImage()
  {
    const currentIndex = this.images.indexOf(this.selectedImage);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[nextIndex];
  }

}

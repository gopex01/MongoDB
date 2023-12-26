import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BorderCrossService } from '../services/border-cross.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  
  constructor(private store:Store,private service:BorderCrossService) {
    
  }
  ngOnInit(): void {
   
  }

}

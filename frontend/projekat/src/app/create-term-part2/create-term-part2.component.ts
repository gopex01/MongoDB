import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSecondPart } from '../actions/create-term.action';

@Component({
  selector: 'app-create-term-part2',
  templateUrl: './create-term-part2.component.html',
  styleUrls: ['./create-term-part2.component.css']
})
export class CreateTermPart2Component implements OnInit{

  CarBrand:string;
  NumOfRegistrationPlates:string;
  ChassisNumber:string;
  constructor(private store:Store) {
    this.CarBrand="";
    this.NumOfRegistrationPlates="";
    this.ChassisNumber="";
  }
  ngOnInit(): void {
  }
  next2()
  {
    let carBrand:string=this.CarBrand;
    let numOfRegistrationPlates:string=this.NumOfRegistrationPlates;
    let chassisNumber:string=this.ChassisNumber;
    this.store.dispatch(setSecondPart({carBrand,numOfRegistrationPlates,chassisNumber}))
  }
}

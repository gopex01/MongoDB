import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setThirdPart } from '../actions/create-term.action';
import { CreateTermService } from '../services/create-term.service';
import { Observable } from 'rxjs';
import { getBCFromBase } from '../actions/border-cross.action';
import { selectAllBC } from '../selectors/border-cross.selector';
import * as termActions from '../actions/create-term.action'

import { BorderCross } from '../models/border-cross.model';

@Component({
  selector: 'app-create-term-part3',
  templateUrl: './create-term-part3.component.html',
  styleUrls: ['./create-term-part3.component.css']
})
export class CreateTermPart3Component implements OnInit{

  arrBC$:Observable<BorderCross[]|null>;
  selectedBorderCross:BorderCross|null;
  NumberOfDays:number;
  PlaceOfResidence:string;
  selectedDate:Date;
  constructor(private store:Store,private ctService:CreateTermService){
    this. NumberOfDays=0;
    this.PlaceOfResidence="";
    this.arrBC$=new Observable<BorderCross[]|null>();
    this.selectedBorderCross=null;
    this.selectedDate=new Date();
  }
  ngOnInit(): void {
    this.store.dispatch(getBCFromBase());
    this.arrBC$=this.store.select(selectAllBC);
  }
  next3()
  {
    this.store.dispatch(setThirdPart({NumberOfDays:this.NumberOfDays,PlaceOfResidence:this.PlaceOfResidence,DateAndTime:this.selectedDate}));
    console.log('Selektovan je ',this.selectedBorderCross);
    let BorderCross:any=this.selectedBorderCross;
    this.store.dispatch(termActions.setFifthPart({BorderCross}))
    //this.ctService.createTerm();
    
  }
  onBorderCrossSelected()
  {

  }
}

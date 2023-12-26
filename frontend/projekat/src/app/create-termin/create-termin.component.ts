import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setFirstPart, setSecondPart, setThirdPart } from '../actions/create-term.action';
import { Passanger } from '../models/passanger.model';

@Component({
  selector: 'app-create-termin',
  templateUrl: './create-termin.component.html',
  styleUrls: ['./create-termin.component.css']
})
export class CreateTerminComponent implements OnInit{

  NumOfPassangers:number;
  vrednostName:string;
  vrednostNumOfPassp:string;
  vrednostJMBG:string;
  vrednostIdNumber:string;
  vrednostAge:number;
  passArr:Passanger[];
  
  
  ngOnInit(): void {
  }
  constructor(private store:Store){
    
    this.NumOfPassangers=0;
    this.vrednostName="";
    this.vrednostNumOfPassp="";
    this.vrednostJMBG="";
    this.vrednostIdNumber="";
    this.vrednostAge=0;
    this.passArr=[];
  }
  addPass()
  {
    let psg:Passanger={
      Name:this.vrednostName,
      NumberOfPassport:this.vrednostNumOfPassp,
      JMBG:this.vrednostJMBG,
      IdNumber:this.vrednostIdNumber,
      Age:this.vrednostAge
    };
    this.passArr.push(psg);
    this.vrednostName="";
    this.vrednostNumOfPassp="";
    this.vrednostJMBG="";
    this.vrednostIdNumber="";
    this.vrednostAge=0;
  }
  next()
  {
    
    let PassangerList:Passanger[]=this.passArr;
    let NumOfPassangers:number=this.NumOfPassangers;
    this.store.dispatch(setFirstPart({NumOfPassangers,PassangerList}));
  }
  ukloniPass(IdNumber:any)
  {
    this.passArr=this.passArr.filter(passenger=>passenger.IdNumber!==IdNumber);
    console.log(this.passArr);
    
  }
 
 

}

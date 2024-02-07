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
      name:this.vrednostName,
      numberOfPassport:this.vrednostNumOfPassp,
      JMBG:this.vrednostJMBG,
      idNumber:this.vrednostIdNumber,
      age:this.vrednostAge
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
    
    let passangerList:Passanger[]=this.passArr;
    let numOfPassangers:number=this.NumOfPassangers;
    this.store.dispatch(setFirstPart({numOfPassangers,passangerList}));
  }
  ukloniPass(IdNumber:any)
  {
    this.passArr=this.passArr.filter(passenger=>passenger.idNumber!==IdNumber);
    console.log(this.passArr);
    
  }
 
 

}

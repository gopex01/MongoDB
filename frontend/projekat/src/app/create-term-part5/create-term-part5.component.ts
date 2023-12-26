import { Component, OnInit } from '@angular/core';
import { BorderCross } from '../models/border-cross.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectAllBC } from '../selectors/border-cross.selector';
import { getBCFromBase } from '../actions/border-cross.action';
import * as termActions from '../actions/create-term.action'
@Component({
  selector: 'app-create-term-part5',
  templateUrl: './create-term-part5.component.html',
  styleUrls: ['./create-term-part5.component.css']
})
export class CreateTermPart5Component implements OnInit{

  arrBc$:Observable<BorderCross[]>=new Observable<BorderCross[]>();
  selectedBorderCross:BorderCross|null;
  constructor(private store:Store) 
  {
    this.selectedBorderCross=null;
  }
  ngOnInit(): void {
    this.store.dispatch(getBCFromBase());
    this.arrBc$=this.store.select(selectAllBC);
  }
  onBorderCrossSelected()
  {

  }
  next()
  {
    console.log('Selektovan je ',this.selectedBorderCross);
    let BorderCross:any=this.selectedBorderCross;
    this.store.dispatch(termActions.setFifthPart({BorderCross}))
  }

}

import { Component, OnInit } from '@angular/core';
import { BorderCross } from '../models/border-cross.model';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable } from 'rxjs';
import { BorderCrossService } from '../services/border-cross.service';
import { Store } from '@ngrx/store';
import { setAllBC } from '../actions/border-cross.action';
import { getBCFromBase } from '../actions/border-cross.action';
import { selectAllBC } from '../selectors/border-cross.selector';

@Component({
  selector: 'app-list-border-cross',
  templateUrl: './list-border-cross.component.html',
  styleUrls: ['./list-border-cross.component.css']
})
export class ListBorderCrossComponent implements OnInit {
  
  arrBc$:Observable<BorderCross[]>;

  constructor(private store:Store,
  private bcService:BorderCrossService)
  {
    this.arrBc$=new Observable<BorderCross[]>();
  }
  ngOnInit(): void {
    this.store.dispatch(getBCFromBase());
    this.arrBc$=this.store.select(selectAllBC);
  }


}

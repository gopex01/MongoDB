import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BorderCross } from '../models/border-cross.model';
import { Observable } from 'rxjs';
import { getBCFromBase } from '../actions/border-cross.action';
import { selectAllBC } from '../selectors/border-cross.selector';
import { BorderCrossService } from '../services/border-cross.service';

@Component({
  selector: 'app-list-border-cross-admin',
  templateUrl: './list-border-cross-admin.component.html',
  styleUrls: ['./list-border-cross-admin.component.css']
})
export class ListBorderCrossAdminComponent implements OnInit{
  arrBc$:Observable<BorderCross[]>;
  bcName:string;
  constructor(private store:Store,
  private bcService:BorderCrossService)
  {
    this.arrBc$=new Observable<BorderCross[]>();
    this.bcName="";
  }
  ngOnInit(): void {
    this.store.dispatch(getBCFromBase());
    this.arrBc$=this.store.select(selectAllBC);
  }
  deleteBC()
  {
    this.bcService.deleteBC(this.bcName);
  }

}

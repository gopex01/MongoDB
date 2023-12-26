import { Component, OnInit } from '@angular/core';
import { BorderCrossService } from '../services/border-cross.service';
import { Observable } from 'rxjs';
import { BorderCross } from '../models/border-cross.model';
import { Store } from '@ngrx/store';
import { getUserInfo } from '../actions/bc-profile.action';
import { selectUsername } from '../selectors/login.selector';
import { selectBCUserInfo } from '../selectors/bc-user-info.selector';

@Component({
  selector: 'app-bcprofile',
  templateUrl: './bcprofile.component.html',
  styleUrls: ['./bcprofile.component.css']
})
export class BCProfileComponent implements OnInit{

  bcUser$:Observable<BorderCross|null>;
  username:string;
  constructor(private store:Store)
  {
    this.bcUser$=new Observable<BorderCross>();
    this.username="";
  }
  ngOnInit(): void {
    this.store.select(selectUsername).subscribe((x)=>{
      this.store.dispatch(getUserInfo({username:x}))
    })
    this.bcUser$=this.store.select(selectBCUserInfo);
    this.bcUser$.subscribe();
  }
}

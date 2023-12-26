import { Component, OnInit } from '@angular/core';
import { BorderCrossService } from '../services/border-cross.service';
import { CreateTermService } from '../services/create-term.service';
import { UserService } from '../services/user.service';
import { Admin } from '../models/admin.model';
import { AdminService } from '../services/admin.service';
import { Store } from '@ngrx/store';
import { getData } from '../actions/admin.action';
import { Observable } from 'rxjs';
import { selectAdminInfo } from '../selectors/admin.selector';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{

  admin$:Observable<Admin|null>;
  constructor(private store:Store)
  {
    this.admin$=new Observable<Admin|null>();
  }
  ngOnInit(): void {
    this.store.dispatch(getData());
    this.admin$=this.store.select(selectAdminInfo);
  }

}

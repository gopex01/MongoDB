import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Store, select } from '@ngrx/store';
import { selectAllUsers } from '../selectors/user.selector';
import { getUsers } from '../actions/user.action';

@Component({
  selector: 'app-list-user-card',
  templateUrl: './list-user-card.component.html',
  styleUrls: ['./list-user-card.component.css']
})
export class ListUserCardComponent implements OnInit{

  arrUsers$:Observable<User[]|null >;
  constructor(private store:Store)
  {
    this.arrUsers$=new Observable<User[] |null>();
  }
  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.arrUsers$=this.store.select(selectAllUsers);
    this.arrUsers$.subscribe(x=>console.log(x));
  }

}

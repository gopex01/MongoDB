import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Term } from '../models/term.model';
import { Store } from '@ngrx/store';
import { selectUsername } from '../selectors/login.selector';
import { getPersonalTerms, getTerms } from '../actions/term.action';
import { selectAllTerms } from '../selectors/term.selector';

@Component({
  selector: 'app-list-personal-term',
  templateUrl: './list-personal-term.component.html',
  styleUrls: ['./list-personal-term.component.css']
})
export class ListPersonalTermComponent implements OnInit{
  
  arrTerm$:Observable<Term[]|null>;
  username:string;
  constructor(private store:Store)
  {
    this.arrTerm$=new Observable<Term[]|null>();
    this.username="";
  }
  ngOnInit(): void {
    this.store.select(selectUsername).subscribe((x)=>
    this.store.dispatch(getPersonalTerms({username:x})));
    this.arrTerm$=this.store.select(selectAllTerms);
  }

}

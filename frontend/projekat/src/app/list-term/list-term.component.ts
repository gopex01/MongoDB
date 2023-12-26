import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Term } from '../models/term.model';
import { Store } from '@ngrx/store';
import { selectUsername } from '../selectors/login.selector';
import { getTerms } from '../actions/term.action';
import { selectAllTerms } from '../selectors/term.selector';

@Component({
  selector: 'app-list-term',
  templateUrl: './list-term.component.html',
  styleUrls: ['./list-term.component.css']
})
export class ListTermComponent implements OnInit{

  arrTerm$:Observable<Term[]|null>;
  constructor(private store:Store)
  {
    this.arrTerm$=new Observable<Term[]>();
  }
  ngOnInit(): void {
    this.store.select(selectUsername).subscribe((x)=>{
      this.store.dispatch(getTerms({username:x}))
    });
    this.arrTerm$=this.store.select(selectAllTerms);
  }

}

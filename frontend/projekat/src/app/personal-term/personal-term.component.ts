import { Component, Input, OnInit } from '@angular/core';
import { Term } from '../models/term.model';

@Component({
  selector: 'app-personal-term',
  templateUrl: './personal-term.component.html',
  styleUrls: ['./personal-term.component.css']
})
export class PersonalTermComponent implements OnInit{
  @Input()
  term:Term|null;
  constructor()
  {
    this.term=null;
  }
  ngOnInit(): void {
  }

}

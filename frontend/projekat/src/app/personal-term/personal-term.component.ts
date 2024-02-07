import { Component, Input, OnInit } from '@angular/core';
import { Term } from '../models/term.model';
import { CreateTermService } from '../services/create-term.service';

@Component({
  selector: 'app-personal-term',
  templateUrl: './personal-term.component.html',
  styleUrls: ['./personal-term.component.css']
})
export class PersonalTermComponent implements OnInit{
  @Input()
  term:Term|null;
  constructor(private termService:CreateTermService)
  {
    this.term=null;
  }
  ngOnInit(): void {
  }
  deleteTerm()
  {
    this.termService.deleteTerm(this.term!.id).subscribe(p=>p);
  }
}

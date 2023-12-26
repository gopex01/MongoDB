import { Component, Input, OnInit } from '@angular/core';
import { Term } from '../models/term.model';
import { CreateTermService } from '../services/create-term.service';
import { BorderCrossService } from '../services/border-cross.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit{

  @Input()
  term:Term|null;
  isCrossed:string;
  isComeBack:string;
  irregulations:string;
  constructor(private bcService:BorderCrossService){
    this.term=null;
    this.isCrossed="";
    this.isComeBack="";
    this.irregulations="";
  }
  ngOnInit(): void {
  }
  change()
  {
    this.bcService.checkTerm(this.term?.Id!,this.isCrossed,this.isComeBack,this.irregulations);
  }

}

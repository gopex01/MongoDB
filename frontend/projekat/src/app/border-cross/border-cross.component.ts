import { Component, Input, OnInit } from '@angular/core';
import { OnInitEffects } from '@ngrx/effects';
import { BorderCross } from '../models/border-cross.model';

@Component({
  selector: 'app-border-cross',
  templateUrl: './border-cross.component.html',
  styleUrls: ['./border-cross.component.css']
})
export class BorderCrossComponent implements OnInit{
  
  @Input()
  borderCross:BorderCross|null=null;
  bcName:string|undefined;
  constructor()
  {
    this.bcName="";
  }
  ngOnInit(): void {
    this.bcName=`../../assets/images/${this.borderCross?.Name}Main.jpeg`;
  }
  
}

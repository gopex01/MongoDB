import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setFourthPart } from '../actions/create-term.action';
import { CreateTermService } from '../services/create-term.service';
import { MatDialog } from '@angular/material/dialog';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogSuccessTermComponent } from '../dialog-success-term/dialog-success-term.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-term-part4',
  templateUrl: './create-term-part4.component.html',
  styleUrls: ['./create-term-part4.component.css']
})
export class CreateTermPart4Component implements OnInit{
  BrojRacuna:string;
  ngOnInit(): void {
  }
  constructor(private store:Store
    ,private ctService:CreateTermService,
    private dialog:MatDialog,
    private router:Router){
    this.BrojRacuna="";
  }
  next4()
  {
    if(this.BrojRacuna.length===16)
    {
      let IsPaid:boolean=true;
      this.store.dispatch(setFourthPart({IsPaid}));
      let x=this.ctService.createTerm();
      x.subscribe((p)=>{
        this.dialog.open(DialogSuccessTermComponent);
        this.router.navigate(['/Profile']);
      });
    }
    else{
      console.error("Neadekvatan broj kartice");
    }
  }

}

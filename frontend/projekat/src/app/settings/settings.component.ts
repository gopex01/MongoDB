import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUserInfo } from '../actions/user-profile.action';
import { selectUserEmail, selectUserName, selectUserPhone } from '../selectors/user-info.selector';
import {selectUsername} from '../selectors/login.selector'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  implements OnInit{

 
  isVisibleIName:Boolean;
  isVisibleIEmail:Boolean;
  isVisibleIUsername:Boolean;
  isVisibleIPhone:Boolean;
  isVisibleDeactivateInput:Boolean;
  isVisibleDeactivateButton:Boolean;
  newName:string;
  newPhone:string;
  newUsername:string;
  newEmail:string;
  email:string|undefined;
  name:string|undefined;
  username:string;
  phone:string|undefined;
  passwordValue:string;
  constructor(private store:Store,
  private userService:UserService) {
    this.newName="";
    this.newEmail="";
    this.newPhone="";
    this.newUsername="";
    this.isVisibleIEmail=false;
    this.isVisibleIName=false;
    this.isVisibleIPhone=false;
    this.isVisibleIUsername=false;
    this.isVisibleDeactivateButton=false;
    this.isVisibleDeactivateInput=false;
    this.name="";
    this.username="";
    this.email="";
    this.phone="";
    this.passwordValue="";
  }
  ngOnInit(): void {
    this.store.select(selectUsername).subscribe((x)=>{
      this.username=x;
    })
    let username:string=this.username;
    this.store.dispatch(getUserInfo({username}));
    this.store.select(selectUserName).subscribe((x)=>{
      this.name=x;
    });
    this.store.select(selectUserPhone).subscribe((x)=>{
      this.phone=x;
    });
    this.store.select(selectUserEmail).subscribe((x)=>{
      this.email=x;
    });
  }
  changeVisibiltyIName()
  {
    if(this.isVisibleIName===true){
      this.isVisibleIName=false;
    }
    else{
      this.isVisibleIName=true;
    }
  }
  changeVisibiltyIEmail()
  {
    if(this.isVisibleIEmail){
    this.isVisibleIEmail=false;
    }
    else{
      this.isVisibleIEmail=true;
    }
  }
  changeVisibiltyIPhone()
  {
    if(this.isVisibleIPhone)
    {
      this.isVisibleIPhone=false;
    }
    else{
      this.isVisibleIPhone=true;
    }
  }
  changeVisibiltyIUsername()
  {
    if(this.isVisibleIUsername){
      this.isVisibleIUsername=false;
    }
    this.isVisibleIUsername=true;
  }
  changeVisibiltyDeactivate()
  {
    if(this.isVisibleDeactivateButton)
    {
      this.isVisibleDeactivateButton=false;
    }
    else{
      this.isVisibleDeactivateButton=true;
    }
    if(this.isVisibleDeactivateInput)
    {
      this.isVisibleDeactivateInput=false;
    }
    else{
      this.isVisibleDeactivateInput=true;
    }
  }
  changeName()
  {
    this.userService.changeName(this.newName);
    this.changeVisibiltyIName();
    this.name=this.newName;
  }
  changeEmail()
  {
    this.changeVisibiltyIEmail();
    this.userService.changeEmail(this.newEmail);
    this.email=this.newEmail;
  }
  changePhone()
  {
    console.log(this.newPhone);
    this.userService.changePhone(this.newPhone);
    this.phone=this.newPhone;
  }
  changeUsername()
  {
    this.changeVisibiltyIUsername();
    this.userService.changeUsername(this.newUsername);
    this.username=this.newUsername;
  }
  deactivate()
  {
    this.userService.deactivateAccount(this.passwordValue);
  }

}

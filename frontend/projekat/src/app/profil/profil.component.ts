import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthToken, selectUsername } from '../selectors/login.selector';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { loginActionSuccess } from '../actions/login.action';
import { Observable, filter, of } from 'rxjs';
import { selectUserInfo } from '../selectors/user-info.selector';
import { getUserInfo } from '../actions/user-profile.action';
import { getNotifications } from '../actions/notification.action';
import { selectNotificationTotal } from '../entities/notification.selector';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{

  user$:Observable<User|null>;// =new Observable<User>();
  tokenUser:string|null;
  username:string;

  notificationNumber$: Observable<number> = new Observable<number>();

  constructor(private store:Store,private userService:UserService){
    this.username="";
    this.tokenUser="";
    this.user$=new Observable<User>();
  }
  ngOnInit(): void {
    this.store.select(selectAuthToken).subscribe((token)=>{
      this.tokenUser=token;
    });
    this.store.select(selectUsername)
    .pipe(
      filter(user => user !== undefined && user !== null),
    )
    .subscribe((x)=>{
      this.username=x;
      this.store.dispatch(getUserInfo({username: x}));
      this.store.dispatch(getNotifications({username:x}));
    })
    let username=this.username;
    this.user$=this.store.select(selectUserInfo);
    this.user$.subscribe((x)=>console.log(x));

    this.notificationNumber$ = this.store.select(selectNotificationTotal);
  }
}

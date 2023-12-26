import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as userActions from "../actions/user-profile.action"
import { map, mergeMap } from "rxjs";
import { UserService } from "../services/user.service";
import { User } from "../models/user.model";
@Injectable()
export class UserProfileEffects{
    constructor(private actions$:Actions,private userService:UserService){}

    loadUserInfo$=createEffect(()=>this.actions$.pipe(
        ofType(userActions.getUserInfo),
        mergeMap(()=>this.userService.getStudentData().pipe(
            map(user=>userActions.setUserInfo({user}))
        ))
    ));
}
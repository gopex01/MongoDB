import { Injectable } from "@angular/core";
import { UserService } from "../services/user.service";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as userActions from "../actions/user.action"
import { map, mergeMap } from "rxjs";
@Injectable()
export class UserEffects{
    constructor(private actions$:Actions,private userService:UserService,private store:Store){}

    loadUsers$=createEffect(()=>this.actions$.pipe(
        ofType(userActions.getUsers),
        mergeMap(()=>this.userService.getAllUsers().pipe(
            map((userArr:any)=>userActions.setAllUsers({userArr}))
        ))
    ))
}

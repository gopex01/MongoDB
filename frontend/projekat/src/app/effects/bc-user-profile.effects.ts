import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BorderCrossService } from "../services/border-cross.service";
import * as BCUserActions from '../actions/bc-profile.action'
import { map, mergeMap } from "rxjs";
@Injectable()
export class BCUserProfileEffects{
    constructor(private actions$:Actions,private BCUserService:BorderCrossService){}

    loadBCUserInfo$=createEffect(()=>this.actions$.pipe(
        ofType(BCUserActions.getUserInfo),
        mergeMap(()=>this.BCUserService.getOneBC().pipe(
            map((BCUser:any)=>BCUserActions.setUserInfo({BCUser}))
        ))
    ));
}
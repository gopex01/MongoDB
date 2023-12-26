import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BorderCrossService } from "../services/border-cross.service";
import * as bcActions from '../actions/border-cross.action';
import { map, mergeMap, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { EMPTY } from 'rxjs';
@Injectable()
export class BorderCrossEffects{
    constructor(private actions$:Actions,private bcService:BorderCrossService,private store:Store){}

    loadBorderCross$=createEffect(()=>this.actions$.pipe(
        ofType(bcActions.getBCFromBase),
        mergeMap(()=>this.bcService.getAllBC().pipe(
            map(arrBc=>bcActions.setAllBC({arrBc}))
        ))
    ))
    
}
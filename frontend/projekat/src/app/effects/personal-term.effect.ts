import {Injectable} from "@angular/core";
import { CreateTermService } from "../services/create-term.service";
import { Actions, createEffect } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import * as termActions from "../actions/term.action"

@Injectable()
export class PersonalTermEffects{
    constructor(private actions$:Actions,private termService:CreateTermService){}
    /* loadPersonalTerms$=createEffect(()=>this.actions$.pipe(
        mergeMap(()=>this.termService.getPersonalTerms().pipe(
            map((arrTerm:any)=>termActions.setPersonalTerms({arrTerm}))
        ))
    ));*/
}
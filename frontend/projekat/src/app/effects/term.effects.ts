import { Injectable } from "@angular/core";
import { Actions, createEffect, mergeEffects, ofType } from "@ngrx/effects";
import { CreateTermService } from "../services/create-term.service";
import { map, mergeMap, of } from "rxjs";
import * as termActions from "../actions/term.action"
@Injectable()
export class TermEffects{
    constructor(private actions$:Actions,private termService:CreateTermService){}

    loadTerms$=createEffect(()=>this.actions$.pipe(
        ofType(termActions.getTerms),
        mergeMap(()=>this.termService.getAllTerms().pipe(
            map((arrTerm:any)=>termActions.setTerms({arrTerm}))
        ))  
    ));
    loadPersonalTerms$=createEffect(()=>this.actions$.pipe(
        ofType(termActions.getPersonalTerms),
        mergeMap(()=>this.termService.getPersonalTerms().pipe(
            map((arrTerm:any)=>termActions.setTerms({arrTerm}))
        ))
    ));
}
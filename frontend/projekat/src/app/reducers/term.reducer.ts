import { createReducer, on } from "@ngrx/store";
import { Term } from "../models/term.model";
import * as termActions from "../actions/term.action"
export interface TermStateArr{
    arrTerm:Term[];
}
export const initialState:TermStateArr={
    arrTerm:[]
}
export const termReducer=createReducer(
    initialState,
    on(termActions.setTerms,(state,{arrTerm})=>({
        ...state,
        arrTerm
    })),
    on(termActions.setPersonalTerms,(state,{arrTerm})=>({
        ...state,
        arrTerm
    }))
);
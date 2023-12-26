import { createAction, props } from "@ngrx/store";
import { Term } from "../models/term.model";

export const getTerms=createAction(
    '[Term] Get Terms',
    props<{username:string}>()
);
export const setTerms=createAction(
    '[Term] Set Terms',
    props<{arrTerm:Term[]}>()
);
export const getPersonalTerms=createAction(
    '[Term] Get Personal Terms',
    props<{username:string}>()
);
export const setPersonalTerms=createAction(
    '[Term] Set Personal Terms',
    props<{arrTerm:Term[]}>()
)
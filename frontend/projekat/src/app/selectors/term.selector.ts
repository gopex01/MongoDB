import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TermStateArr } from "../reducers/term.reducer";


export const selectTermState=createFeatureSelector<TermStateArr>('termS');
export const selectAllTerms=createSelector(
    selectTermState,
    (state)=>state.arrTerm
);
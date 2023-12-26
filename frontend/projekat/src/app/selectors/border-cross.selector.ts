import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { BCState } from "../reducers/border.cross.reducer";

export const selectBCState=createFeatureSelector<BCState>('bc');

export const selectAllBC=createSelector(
    selectBCState,
    (state)=>state.arrBc
);
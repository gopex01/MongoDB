import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ArrUserState } from "../reducers/user.reducer";

export const selectArrUserState=createFeatureSelector<ArrUserState>('userArr');
export const selectAllUsers=createSelector(
    selectArrUserState,
    (state)=>state.userArr
);
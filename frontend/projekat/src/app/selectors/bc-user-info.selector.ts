import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BCUserState } from "../reducers/bc-profile.reducer";

export const selectBCUserState=createFeatureSelector<BCUserState>('bcuser');
export const selectBCUserInfo=createSelector(
    selectBCUserState,
    (state)=>state.BCUser
);
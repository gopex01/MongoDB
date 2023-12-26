import { AuthState } from "../reducers/login.reducer"
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectLoginState=createFeatureSelector<AuthState>('auth');

export const selectAuthToken=createSelector(
    selectLoginState,
    (authState)=>authState.token
);
export const selectUsername=createSelector(
    selectLoginState,
    (authState)=>authState.username
);
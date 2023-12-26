import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user.model";
import * as userActions from "../actions/user.action"
export interface ArrUserState{
    userArr:User[];
}
export const initialState:ArrUserState={
    userArr:[]
}

export const ArrUserReducer=createReducer(
    initialState,
    on(userActions.setAllUsers,(state,{userArr})=>({
        ...state,
        userArr
    }))
);
import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user.model";
import * as userActions from "../actions/user-profile.action"
export interface UserState{
    user:User|null
}
export const initialState:UserState={
    user:null
};
export const userProfileReducer=createReducer(
    initialState,
    on(userActions.setUserInfo,(state,{user})=>({
        ...state,
       user
    }))
);
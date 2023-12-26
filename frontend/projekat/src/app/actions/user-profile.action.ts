import { createAction,props } from "@ngrx/store";
import { User } from "../models/user.model";

export const getUserInfo=createAction(
    '[User] Get User Info',
    props<{username:string}>()
);
export const setUserInfo=createAction(
    '[User] Set User Info',
    props<{user:User}>()
);

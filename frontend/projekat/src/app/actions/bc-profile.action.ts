import { createAction, props } from "@ngrx/store";
import { BorderCross } from "../models/border-cross.model";

export const getUserInfo=createAction(
    '[BCUser] Get BC User Info',
    props<{username:string}>()
);
export const setUserInfo=createAction(
    '[BCUser] Set BC User Info',
    props<{BCUser:BorderCross}>()
)
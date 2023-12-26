import { createReducer, on } from "@ngrx/store";
import { Notification } from "../models/notification.model";
import * as notActions from "../actions/notification.action"
export interface NotificationState{
    arrNot:Notification[];
}
export const initialState:NotificationState={
    arrNot:[]
}
export const notificationReducer=createReducer(
    initialState,
    on(notActions.setNotifications,(state,{arrNot})=>({
        ...state,
        arrNot
    }))
);
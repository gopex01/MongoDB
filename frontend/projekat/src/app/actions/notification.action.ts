import { createAction, props } from "@ngrx/store";
import { Notification } from "../models/notification.model";

export const getNotifications=createAction(
    '[Not] Get All Notification',
    props<{username:string}>()
);
export const setNotifications=createAction(
    '[Not] Set All ',
    props<{arrNot:Notification[]}>()
);
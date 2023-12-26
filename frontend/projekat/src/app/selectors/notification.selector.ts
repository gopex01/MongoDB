import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NotificationState } from "../reducers/notification.reducer";

export const selectNotificationState=createFeatureSelector<NotificationState>('notification');
export const selectAllNotification=createSelector(
    selectNotificationState,
    (state)=>state.arrNot
)
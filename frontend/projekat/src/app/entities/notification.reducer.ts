import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Notification } from '../models/notification.model';
import { createReducer, on } from '@ngrx/store';
import * as NotificationActions from "./notification.actions";


export interface State extends EntityState<Notification> {

}

export function selectNotificationId(n: Notification): string {
  return n.Id.toString();
}

export function sortByDateAndTime(a: Notification, b: Notification): number {
  return a.Id - b.Id;
}

export const adapter: EntityAdapter<Notification> = createEntityAdapter<Notification>({
  selectId: selectNotificationId,
  sortComparer: sortByDateAndTime,
});

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
  });
   
export const notificationReducer = createReducer(
    initialState,
    
    on(NotificationActions.upsertNotifications, (state, { notifications }) => {
      return adapter.upsertMany(notifications, state);
    }),
   
    on(NotificationActions.deleteNotification, (state, { Id }) => {
      return adapter.removeOne(Id, state);
    }),
    
    on(NotificationActions.clearNotifications, state => {
      return adapter.removeAll({ ...state, });
    })
  );
   
  const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();
   
  export const selectNotificationIds = selectIds;
  export const selectNotificationEntities = selectEntities;
  export const selectAllNotifications = selectAll;
  export const selectNotificationTotal = selectTotal;
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEvent from './notification.reducer';

const selectors = fromEvent.adapter.getSelectors();

export interface State {
    notifications: fromEvent.State;
}

export const reducers: ActionReducerMap<State> = {
    notifications: fromEvent.notificationReducer,
};

export const selectNotificationState = createFeatureSelector<fromEvent.State>('notification');

export const selectNotificationIds = createSelector(
    selectNotificationState,
    selectors.selectIds
);

export const selectNotificationEntities = createSelector(
    selectNotificationState,
    selectors.selectEntities
);

export const selectAllNotifications = createSelector(
    selectNotificationState,
    selectors.selectAll
);

export const selectNotificationTotal = createSelector(
    selectNotificationState,
    selectors.selectTotal
);
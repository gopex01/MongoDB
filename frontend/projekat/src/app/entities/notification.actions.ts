import { createAction, props } from '@ngrx/store';
import { Notification } from '../models/notification.model';

export const upsertNotifications = createAction('[Notification/API] Upsert Notifications', props<{ notifications: Notification[] }>());

export const deleteNotification = createAction('[Notification/API] Delete Notification', props<{ Id: string }>());

export const clearNotifications = createAction('[Notification/API] Clear Notifications');
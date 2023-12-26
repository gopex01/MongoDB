import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Notification } from '../models/notification.model';
import { Store } from '@ngrx/store';
import { selectUsername } from '../selectors/login.selector';
import { getNotifications, setNotifications } from '../actions/notification.action';
import { NotificationService } from '../services/notification.service';
import { upsertNotifications } from '../entities/notification.actions';
import { selectAllNotifications, selectNotificationEntities } from '../entities/notification.selector';

@Component({
  selector: 'app-list-notification',
  templateUrl: './list-notification.component.html',
  styleUrls: ['./list-notification.component.css']
})
export class ListNotificationComponent implements OnInit{

  arrNotification$:Observable<Notification[]|null>;
  constructor(private store:Store, private notificationService: NotificationService)
  {
    this.arrNotification$=new Observable<Notification[]|null>();
  }
  ngOnInit(): void {
    this.arrNotification$ = this.store.select(selectAllNotifications);
  }

}

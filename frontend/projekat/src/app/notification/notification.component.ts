import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../models/notification.model';
import { NotificationService } from '../services/notification.service';
import { Store } from '@ngrx/store';
import { deleteNotification } from '../entities/notification.actions';
import { CreateTermService } from '../services/create-term.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogSuccessAcceptedTermComponent } from '../dialog-success-accepted-term/dialog-success-accepted-term.component';
import { DialogDeclineTermComponent } from '../dialog-decline-term/dialog-decline-term.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
  @Input()
  notification:Notification|null;
  constructor(private notService:NotificationService,
  private store: Store,
  private termService:CreateTermService,
  private dialog:MatDialog)
  {
    this.notification=null;
  }
  ngOnInit(): void {
  }
  markAsRead()
  {
    console.log("Mark as read component");
    this.store.dispatch(deleteNotification({Id: this.notification!.id.toString()}));
    this.notService.markAsRead(this.notification!.id);
  }
  acceptTerm()
  {
    this.termService.acceptTerm(this.notification!.id);
    this.dialog.open(DialogSuccessAcceptedTermComponent);
  }
  declineTerm()
  {
    this.termService.declineTerm(this.notification!.id);
    this.dialog.open(DialogDeclineTermComponent);
  }

}

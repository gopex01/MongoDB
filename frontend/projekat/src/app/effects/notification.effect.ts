import {Injectable} from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { NotificationService } from "../services/notification.service";
import * as notActions from "../actions/notification.action"
import * as notActionsEntities from "../entities/notification.actions";
import { map, mergeMap,pipe } from "rxjs";
import { Notification } from "../models/notification.model";
@Injectable()
export class NotificationEffects{
    constructor(private actions$:Actions,private notService:NotificationService){}

    notifications$=createEffect(()=>this.actions$.pipe(
        ofType(notActions.getNotifications),
        mergeMap(()=>this.notService.getNotifications().pipe(
            map(obj => obj as Notification[]),
            map(arrNot=>notActionsEntities.upsertNotifications({ notifications: arrNot }))
        ))
    ))
}
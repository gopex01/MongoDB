import {Injectable} from "@angular/core"
import { AdminService } from "../services/admin.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as adminActions from "../actions/admin.action"
import { catchError, forkJoin, from, map, mergeMap, of, switchMap } from "rxjs";
import { AdminState } from "../reducers/admin.reducer";
@Injectable()
export class AdminEffects{
    constructor(private actions$:Actions
        ,private adminService:AdminService){}

        getData$ = createEffect(() =>
        this.actions$.pipe(
          ofType(adminActions.getData),
          switchMap(() =>
            this.adminService.getData().pipe(
              map((data) => adminActions.setData({ admin: data })),
              catchError((error) =>
                of(/* Obrada greške ili dispečiranje akcije za grešku */)
              )
            )
          )
        )
      );
}

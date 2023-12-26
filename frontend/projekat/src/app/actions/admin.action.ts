import { createAction, props } from "@ngrx/store";
import { Admin } from "../models/admin.model";

export const getData=createAction(
    '[Admin] Get Data'
);
export const setData=createAction(
    '[Admin] Set Data',
    props<{admin:Admin}>()
);
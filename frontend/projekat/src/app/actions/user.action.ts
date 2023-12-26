import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";

export const getUsers=createAction(
    '[Users] Get Users'
);
export const setAllUsers=createAction(
    '[Users] Set All Users',
    props<{userArr:User[]}>()
);
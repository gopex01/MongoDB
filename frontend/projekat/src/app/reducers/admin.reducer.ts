import { createReducer, on } from "@ngrx/store";
import * as adminActions from "../actions/admin.action"
import { Admin } from "../models/admin.model";
export interface AdminState{
    admin:Admin|null
}
export const initialState:AdminState={
    admin:null
};
export const adminReducer=createReducer(
    initialState,
    on(adminActions.setData,(state,{admin})=>({
        ...state,
        admin
    }))
);
import { createReducer, on } from "@ngrx/store";
import { BorderCross } from "../models/border-cross.model";
import * as BCUserActions from "../actions/bc-profile.action"

export interface BCUserState{
    BCUser:BorderCross|null;
}
export const initialState:BCUserState={
    BCUser:null
};

export const userBCProfileReducer=createReducer(
    initialState,
    on(BCUserActions.setUserInfo,(state,{BCUser})=>({
        ...state,
        BCUser
    }))
);
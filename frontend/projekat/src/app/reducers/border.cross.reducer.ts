import { createReducer, on } from "@ngrx/store";
import { BorderCross } from "../models/border-cross.model";
import * as bcActions from "../actions/border-cross.action"

export interface BCState{
    arrBc:BorderCross[];
}
export const initialState:BCState={
    arrBc:[]
}
export const borderCrossReducer=createReducer(
    initialState,
    on(bcActions.setAllBC,(state,{arrBc})=>({
        ...state,
        arrBc,
    })),
    on(bcActions.getOneBC, (state, { Name }) => state)
);
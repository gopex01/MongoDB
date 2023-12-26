import { createAction,props } from "@ngrx/store";
import { BorderCross } from "../models/border-cross.model";

export const setAllBC=createAction(
    '[BC] Set All BC',
    props<{arrBc:BorderCross[]}>()
);
export const getOneBC=createAction(
    '[BC] Get One BC',
    props<{Name:string}>()
);
export const getBCFromBase=createAction(
    '[BC] Get BC From Base'
);
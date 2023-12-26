import { createFeature, createFeatureSelector, createSelector, select } from "@ngrx/store";
import { AdminState } from "../reducers/admin.reducer";

export const selectAdminState=createFeatureSelector<AdminState>('admin');
export const selectAdminInfo=createSelector(
    selectAdminState,
    (state)=>state.admin
)
import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../reducers/user-profile.reducer";
export const selectUserState=createFeatureSelector<UserState>('user');
export const selectUserInfo=createSelector(
    selectUserState,
    (state)=>state.user
);
export const selectUserEmail=createSelector(
    selectUserState,
    (state)=>state.user?.Email
)
export const selectUserName=createSelector(
    selectUserState,
    (state)=>state.user?.NameAndSurname
);
/*export const selectUsername=createSelector(
    selectUserState,
    (state)=>state.user?.Username
);*/
export const selectUserPhone=createSelector(
    selectUserState,
    (state)=>state.user?.PhoneNumber
)
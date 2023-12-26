import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../reducers/user-profile.reducer";
export const selectUserState=createFeatureSelector<UserState>('user');
export const selectUserInfo=createSelector(
    selectUserState,
    (state)=>state.user
);
export const selectUserId=createSelector(
    selectUserState,
    (state)=>state.user?.id
)
export const selectUserEmail=createSelector(
    selectUserState,
    (state)=>state.user?.email
)
export const selectUserName=createSelector(
    selectUserState,
    (state)=>state.user?.nameAndSurname
);
/*export const selectUsername=createSelector(
    selectUserState,
    (state)=>state.user?.Username
);*/
export const selectUserPhone=createSelector(
    selectUserState,
    (state)=>state.user?.phoneNumber
)
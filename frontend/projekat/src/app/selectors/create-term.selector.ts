import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { TermState } from "../reducers/create-term.reducer";

export const selectTermState=createFeatureSelector<TermState>('term');
export const setFirstPart=createSelector(
    selectTermState,
    (state)=>{
    state.NumOfPassangers;
    state.PassangerList;
}
);
export const setSecondPart=createSelector(
    selectTermState,
    (state)=>{
        state.NumOfRegistrationPlates,
        state.ChassisNumber
    }
);
export const setThirdPart=createSelector(
    selectTermState,
    (state)=>{
        state.NumberOfDays,
        state.PlaceOfResidence,
        state.DateAndTime
    }
);
export const selectBorderCross=createSelector(
    selectTermState,
    (state)=>state.BorderCross
)
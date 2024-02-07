import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { TermState } from "../reducers/create-term.reducer";

export const selectTermState=createFeatureSelector<TermState>('term');
export const setFirstPart=createSelector(
    selectTermState,
    (state)=>{
    state.numOfPassangers;
    state.passangerList;
}
);
export const setSecondPart=createSelector(
    selectTermState,
    (state)=>{
        state.numOfRegistrationPlates,
        state.chassisNumber
    }
);
export const setThirdPart=createSelector(
    selectTermState,
    (state)=>{
        state.numberOfDays,
        state.placeOfResidence,
        state.dateAndTime
    }
);
export const selectBorderCross=createSelector(
    selectTermState,
    (state)=>state.borderCross
)
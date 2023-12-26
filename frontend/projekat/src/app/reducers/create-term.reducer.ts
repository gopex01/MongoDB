import { createReducer, on } from "@ngrx/store";
import { Passanger } from "../models/passanger.model";
import * as termActions from "../actions/create-term.action"
export interface TermState{
    NumOfPassangers:number;
    PassangerList:Passanger[];
    CarBrand:string;
    NumOfRegistrationPlates:string;
    ChassisNumber:string;
    NumberOfDays:number;
    PlaceOfResidence:string;
    DateAndTime:Date;
    IsPaid:Boolean;
    IsCrossed:Boolean;
    IsComeBack:Boolean;
    Irregularities:string;
    BorderCross:string|undefined;
}
export const initialState:TermState={
    NumOfPassangers:0,
    PassangerList:[],
    CarBrand:'',
    NumOfRegistrationPlates:'',
    ChassisNumber:'',
    NumberOfDays:0,
    PlaceOfResidence:'',
    DateAndTime:new Date(2023),
    IsPaid:false,
    IsCrossed:false,
    IsComeBack:false,
    Irregularities:"Ne postoje",
    BorderCross:''
}
export const reducerFinal=createReducer(
    initialState,
    on(termActions.setFirstPart,(state,{NumOfPassangers,PassangerList})=>({
        ...state,
        NumOfPassangers,
        PassangerList
    })),
    on(termActions.setSecondPart,(state,{CarBrand,NumOfRegistrationPlates,ChassisNumber})=>({
        ...state,
        CarBrand,
        NumOfRegistrationPlates,
        ChassisNumber
    })),
    on(termActions.setThirdPart,(state,{NumberOfDays,PlaceOfResidence,DateAndTime})=>({
        ...state,
        NumberOfDays,
        PlaceOfResidence,
        DateAndTime

    })),
    on(termActions.setFourthPart,(state,{IsPaid})=>({
        ...state,
        IsPaid
    })),
    on(termActions.setFifthPart,(state,{BorderCross})=>({
        ...state,
        BorderCross
    }))
);


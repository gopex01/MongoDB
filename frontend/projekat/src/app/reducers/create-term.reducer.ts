import { createReducer, on } from "@ngrx/store";
import { Passanger } from "../models/passanger.model";
import * as termActions from "../actions/create-term.action"
export interface TermState{
    id:number;
    numOfPassangers:number;
    passangerList:Passanger[];
    carBrand:string;
    numOfRegistrationPlates:string;
    chassisNumber:string;
    numberOfDays:number;
    placeOfResidence:string;
    dateAndTime:Date;
    isPaid:Boolean;
    isCrossed:Boolean|undefined;
    isComeBack:Boolean|undefined;
    irregularities:string|undefined;
    borderCross:string|undefined;
}

export const initialState:TermState={
    id:0,
    numOfPassangers:0,
    passangerList:[],
    carBrand:'',
    numOfRegistrationPlates:'',
    chassisNumber:'',
    numberOfDays:0,
    placeOfResidence:'',
    dateAndTime:new Date(2023),
    isPaid:false,
    isCrossed:undefined,
    isComeBack:undefined,
    irregularities:undefined,
    borderCross:''
}
export const reducerFinal=createReducer(
    initialState,
    on(termActions.setFirstPart,(state,{numOfPassangers,passangerList})=>({
        ...state,
        numOfPassangers,
        passangerList
    })),
    on(termActions.setSecondPart,(state,{carBrand,numOfRegistrationPlates,chassisNumber})=>({
        ...state,
        carBrand,
        numOfRegistrationPlates,
        chassisNumber
    })),
    on(termActions.setThirdPart,(state,{numberOfDays,placeOfResidence,dateAndTime})=>({
        ...state,
        numberOfDays,
        placeOfResidence,
        dateAndTime

    })),
    on(termActions.setFourthPart,(state,{isPaid})=>({
        ...state,
        isPaid
    })),
    on(termActions.setFifthPart,(state,{borderCross})=>({
        ...state,
        borderCross
    }))
);


import { createAction, props } from "@ngrx/store";
import { Passanger } from "../models/passanger.model";

export const setFirstPart=createAction(
    '[Term] Set First Part',
    props<{NumOfPassangers:number,PassangerList:Passanger[]}>()
);

export const setSecondPart=createAction(
    '[Term] Set Second Part',
    props<{CarBrand:string,NumOfRegistrationPlates:string,ChassisNumber:string}>()
);

export const setThirdPart=createAction(
    '[Term] Set Third Part',
    props<{NumberOfDays:number,PlaceOfResidence:string,DateAndTime:Date}>()
);
export const setFourthPart=createAction(
    '[Term] Set Fourth Part',
    props<{IsPaid:boolean}>()
);
export const setFifthPart=createAction(
    '[Term] Set Fifth Part',
    props<{BorderCross:string|undefined}>()
);
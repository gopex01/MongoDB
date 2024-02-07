import { createAction, props } from "@ngrx/store";
import { Passanger } from "../models/passanger.model";

export const setFirstPart=createAction(
    '[Term] Set First Part',
    props<{numOfPassangers:number,passangerList:Passanger[]}>()
);

export const setSecondPart=createAction(
    '[Term] Set Second Part',
    props<{carBrand:string,numOfRegistrationPlates:string,chassisNumber:string}>()
);

export const setThirdPart=createAction(
    '[Term] Set Third Part',
    props<{numberOfDays:number,placeOfResidence:string,dateAndTime:Date}>()
);
export const setFourthPart=createAction(
    '[Term] Set Fourth Part',
    props<{isPaid:boolean}>()
);
export const setFifthPart=createAction(
    '[Term] Set Fifth Part',
    props<{borderCross:string|undefined}>()
);
import { Passanger } from "./passanger.model";

export interface Term{
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
    isCrossed:Boolean;
    isComeBack:Boolean;
    irregularities:string|null;
}
import { Passanger } from "./passanger.model";

export interface Term{
    Id:number;
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
    Irregularities:string|null;
}

import { Document } from 'mongoose';
export interface ITerm extends Document{
   id:number;
   numOfPassangers:number;
   passangerList:string;
   carBrand:string;
   numOfRegistationPlates:string;
   chassisNumber:string;
   numberOfDays:number;
   placeOfResidence:string;
   dateAndTime:Date;
   isPaid:Boolean;
   isCrossed:Boolean;
   isComeBack:Boolean;
   irregularities:string;
   accepted:boolean;
    userId:number;
   borderCrossId:number;
}
export type ITermDocument= ITerm & Document;
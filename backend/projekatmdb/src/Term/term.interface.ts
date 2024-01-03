
import { Document } from 'mongoose';
import { Passanger } from './passanger.interface';
export interface ITerm extends Document{
   id:number;
   numOfPassangers:number;
   passangerList:Passanger[];
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
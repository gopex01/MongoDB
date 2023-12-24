
import { Document } from 'mongoose';
export interface ITerm extends Document{
   readonly id:number;
   readonly numOfPassangers:number;
   readonly passangerList:string;
   readonly carBrand:string;
   readonly numOfRegistationPlates:string;
   readonly chassisNumber:string;
   readonly numberOfDays:number;
   readonly placeOfResidence:string;
   readonly dateAndTime:Date;
   readonly isPaid:Boolean;
   readonly isCrossed:Boolean;
   readonly isComeBack:Boolean;
   readonly irregularities:string;
   readonly accepted:boolean;
    userId:number;
   borderCrossId:number;
}
export type ITermDocument= ITerm & Document;
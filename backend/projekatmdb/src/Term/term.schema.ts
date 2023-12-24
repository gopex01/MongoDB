import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class TermEntity{
    @Prop({ default: () => generateUniqueId()})
    id:number;
    @Prop()
    numOfPassangers:number;
    @Prop()
    passangerList:string;
    @Prop()
    carBrand:string;
    @Prop()
    numOfRegistationPlates:string;
    @Prop()
    chassisNumber:string;
    @Prop()
    numberOfDays:number;
    @Prop()
    placeOfResidence:string;
    @Prop()
    dateAndTime:Date;
    @Prop()
    isPaid:Boolean;
    @Prop()
    isCrossed:Boolean;
    @Prop()
    isComeBack:Boolean;
    @Prop()
    irregularities:string;
    @Prop()
    accepted:boolean;
    @Prop()
    userId:number;
    @Prop()
    borderCrossId:number;
}
export const TermSchema=SchemaFactory.createForClass(TermEntity);
// Utility funkcija za generisanje jedinstvenih identifikatora
export function generateUniqueId(): number {
    return Date.now(); // Prilagodite funkciju prema svojim potrebama
  }
  
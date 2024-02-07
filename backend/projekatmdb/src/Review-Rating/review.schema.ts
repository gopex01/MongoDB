import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class ReviewEntity{

    @Prop({default:()=>generateUniqueId()})
    id:number;
    @Prop()
    comment:string;
    @Prop()
    rate:number;
    @Prop()
    dateAndTime:Date;
    @Prop({default:0})
    numberOfLikes:number;
    @Prop({default:false})
    status:boolean;
    @Prop()
    userId:number;
    @Prop()
    borderCrossId:number;

}
export const reviewSchema=SchemaFactory.createForClass(ReviewEntity);
export function generateUniqueId(): number {
    return Date.now();
  }
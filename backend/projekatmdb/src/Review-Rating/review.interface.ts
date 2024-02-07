import {Document} from 'mongoose'
export interface IReview extends Document{
    id:number;
    comment:string;
    rate:number;
    dateAndTime:Date;
    numberOfLikes:number;
    status:boolean;
    userId:number;
    borderCrossId:number;
}
export type IReviewDocument=IReview & Document;
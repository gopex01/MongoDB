import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class NotifiticationEntity {
  @Prop({ default: () => generateUniqueId()})
  id: number;
  @Prop()
  content: string;
  @Prop()
  isRead: boolean = false;
  @Prop()
  dateAndTime: Date;
  @Prop()
  idTerm:number;
  @Prop()
  typeTerm:boolean;
  @Prop()
  userId:number;
  @Prop()
  termId:number;
  @Prop({type:Date,expires:0})
  expiresAt:Date;
}
export const NotificationSchema =
  SchemaFactory.createForClass(NotifiticationEntity);
  export function generateUniqueId(): number {
    return Date.now(); // Prilagodite funkciju prema svojim potrebama
  }

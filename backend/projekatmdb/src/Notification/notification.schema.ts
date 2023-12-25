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
  userId:number;
  @Prop()
  termId:number;
}
export const NotificationSchema =
  SchemaFactory.createForClass(NotifiticationEntity);
  export function generateUniqueId(): number {
    return Date.now(); // Prilagodite funkciju prema svojim potrebama
  }

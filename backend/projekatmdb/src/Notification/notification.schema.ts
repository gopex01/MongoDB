import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class NotifiticationEntity {
  @Prop()
  id: number;
  @Prop()
  content: string;
  @Prop()
  isRead: boolean = false;
  @Prop()
  dateAndTime: Date;
}
export const NotificationSchema =
  SchemaFactory.createForClass(NotifiticationEntity);

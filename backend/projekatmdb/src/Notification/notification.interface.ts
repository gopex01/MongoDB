export interface INotification extends Document {
  readonly id: number;
  readonly content: string;
  readonly isRead: boolean;
  readonly dateAndTime: Date;
  readonly idTerm:number;
}
export type INotificationDocument = INotification & Document;

export interface INotification extends Document {
 id: number;
 content: string;
 isRead: boolean;
 dateAndTime: Date;
 idTerm:number;
 userId:number;
 
}
export type INotificationDocument = INotification & Document;

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { INotification, INotificationDocument } from './notification.interface';
import { Model, Document } from 'mongoose';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel('Notification')
    private notificationModel = Model<Document> as Model<INotificationDocument>,
  ) {}
  async addNotification(message: string, userId: number, idTerm: number) {
    let newNotification = {
      content: message,
      isRead: false,
      dateAndTime: new Date(),
      userId: userId,
      idTerm: idTerm,
      expireAt:new Date(Date.now()+24*60*60*1000),//istice posle 24h
    };
    let createdNotification = new this.notificationModel(newNotification);
    return createdNotification.save();
  }
  async getAllNotifications() {
    const notifications = await this.notificationModel.find();
    if (!notifications) {
      return null;
    }
    return notifications;
  }

  async getNotificationById(id: number) {
    const notification = await this.notificationModel.findOne({ id });
    console.log(notification);
    if (!notification) {
      return 'ne postoji notifikacija';
    }
    return notification;
  }
  async getNotificationOfUser(userId:number):Promise<INotification[]|null>
  {
    const notifications=await this.notificationModel.find({userId:userId});
    const retarr=[];
    notifications.forEach(async not=>{
      if(not.isRead==false)
      {
        retarr.push(not);
      }
    });
    return await retarr;
  }
}

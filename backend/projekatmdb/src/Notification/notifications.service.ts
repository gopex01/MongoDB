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
    let newNotification: INotification;
    newNotification.content = message;
    newNotification.isRead = false;
    newNotification.dateAndTime = new Date();
    newNotification.userId = userId;
    newNotification.idTerm = idTerm;
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
}

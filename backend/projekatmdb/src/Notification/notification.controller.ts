import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { INotification } from './notification.interface';
import { NotificationService } from './notifications.service';

@Controller('Notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}
  @Get('getNotificationById/:id')
  async getNotificationById(@Param('id') id: number) {
    return this.notificationService.getNotificationById(id);
  }
  @Get('getAllNotifications')
  async getAllNotifications() {
    return this.notificationService.getAllNotifications();
  }
  @Get('getPersonalNotifications/:idUser')
  async getPersonalNotifications(@Param('idUser') IdUser:number)
  {
    return await this.notificationService.getNotificationOfUser(IdUser);
  }
  @Patch('readNot/:idNot')
  async readNot(@Param('idNot') idNot:number)
  {
    return await this.notificationService.readNotification(idNot);
  }
}

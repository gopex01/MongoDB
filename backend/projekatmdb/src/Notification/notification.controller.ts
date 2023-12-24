import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { INotification } from './notification.interface';
import { NotificationService } from './notifications.service';

@Controller('Notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}
  @Post('addNotification')
  async addNotification(@Body() notification: INotification) {
    return this.notificationService.addNotification(notification);
  }
  @Get('getNotificationById/:id')
  async getNotificationById(@Param('id') id: number) {
    return this.notificationService.getNotificationById(id);
  }
  @Get('getAllNotifications')
  async getAllNotifications() {
    return this.notificationService.getAllNotifications();
  }
}

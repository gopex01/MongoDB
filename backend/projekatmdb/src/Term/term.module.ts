import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TermSchema } from './term.schema';
import { TermService } from './term.service';
import { TermController } from './term.controller';
import { BorderCrossService } from 'src/BorderCross/bc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorderCrossEntity } from 'src/BorderCross/bc.entity';
import { NotificationSchema } from 'src/Notification/notification.schema';
import { NotificationService } from 'src/Notification/notifications.service';
import { NotificationModule } from 'src/Notification/notifications.module';
import { BorderCrossModule } from 'src/BorderCross/bc.module';
import { Repository } from 'typeorm';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Term', schema: TermSchema }]),
    TypeOrmModule.forFeature([BorderCrossEntity]),
    MongooseModule.forFeature([
      { name: 'Notification', schema: NotificationSchema },
    ]),
    NotificationModule,
    forwardRef(() => BorderCrossModule),
  ],
  providers: [TermService, Repository],
  controllers: [TermController],
})
export class TermModule {}

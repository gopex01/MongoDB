import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BorderCrossEntity } from './bc.entity';
import { BorderCrossService } from './bc.service';
import { BorderCrossController } from './bc.controller';
import { NotificationService } from 'src/Notification/notifications.service';
import { TermModule } from 'src/Term/term.module';
import { TermService } from 'src/Term/term.service';
import { TermSchema } from 'src/Term/term.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModule } from 'src/Notification/notifications.module';
import { NotificationSchema } from 'src/Notification/notification.schema';

@Module({
  imports: [TypeOrmModule.forFeature([BorderCrossEntity]),
  MongooseModule.forFeature([{name:'Term', schema:TermSchema}]),
  MongooseModule.forFeature([
    { name: 'Notification', schema: NotificationSchema },
  ])],
  providers: [BorderCrossService,NotificationService],
  controllers: [BorderCrossController],
  exports:[BorderCrossService]
})
export class BorderCrossModule {}

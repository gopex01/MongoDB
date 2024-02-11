import { Module, forwardRef } from '@nestjs/common';
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
import { Repository } from 'typeorm';
import { reviewSchema } from 'src/Review-Rating/review.schema';
import { ReviewModule } from 'src/Review-Rating/review.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([BorderCrossEntity]),
    MongooseModule.forFeature([{ name: 'Term', schema: TermSchema }]),
    MongooseModule.forFeature([
      { name: 'Notification', schema: NotificationSchema },
    ]),
    NotificationModule,
    forwardRef(() => TermModule),
  ],
  providers: [BorderCrossService, Repository],
  controllers: [BorderCrossController],
  exports: [BorderCrossService],
})
export class BorderCrossModule {}

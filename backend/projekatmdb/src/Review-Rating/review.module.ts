import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReviewEntity, reviewSchema } from "./review.schema";
import { ReviewService } from "./review.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BorderCrossEntity } from "src/BorderCross/bc.entity";
import { BorderCrossService } from "src/BorderCross/bc.service";
import { Repository } from "typeorm";
import { NotificationSchema } from "src/Notification/notification.schema";
import { ReviewController } from "./review.controller";
import { NotificationService } from "src/Notification/notifications.service";
import { TermModule } from "src/Term/term.module";
import { NotificationModule } from "src/Notification/notifications.module";
import { BorderCrossModule } from "src/BorderCross/bc.module";

@Module({
    imports:[
        MongooseModule.forFeature([{name:'Review',schema:reviewSchema}]),
        TypeOrmModule.forFeature([BorderCrossEntity]),
        MongooseModule.forFeature([
            { name: 'Notification', schema: NotificationSchema },
          ]),
        NotificationModule,
        BorderCrossModule],
    providers:[ReviewService,Repository],
    controllers:[ReviewController]
})
export class ReviewModule{}
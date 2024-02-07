import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { reviewSchema } from "./review.schema";
import { ReviewService } from "./review.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BorderCrossEntity } from "src/BorderCross/bc.entity";
import { BorderCrossService } from "src/BorderCross/bc.service";
import { Repository } from "typeorm";
import { NotificationSchema } from "src/Notification/notification.schema";

@Module({
    imports:[
        MongooseModule.forFeature([{name:'Review',schema:reviewSchema}]),
        TypeOrmModule.forFeature([BorderCrossEntity]),
        MongooseModule.forFeature([
            { name: 'Notification', schema: NotificationSchema },
          ]),
    ],
    providers:[ReviewService,BorderCrossService,Repository],
    controllers:[]
})
export class ReviewModule{}
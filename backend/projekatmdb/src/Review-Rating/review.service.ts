import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Document } from 'mongoose';
import { IReview,IReviewDocument } from "./review.interface";
import { BorderCrossService } from "src/BorderCross/bc.service";
import { NotificationService } from "src/Notification/notifications.service";
import { INotificationDocument } from "src/Notification/notification.interface";
@Injectable()
export class ReviewService{
    constructor(@InjectModel('Review')
    private reviewModule=Model<Document> as Model<IReviewDocument>,
    @Inject(BorderCrossService) private readonly bcService:BorderCrossService,
    @InjectModel('Notification') private notModule=Model<Document> as Model<INotificationDocument>,
    @Inject(NotificationService) private readonly notService:NotificationService){}

    async addReview(newReview:IReview,idUser:number,bcName:string):Promise<IReview>
    {
        const createdReview:IReview=new this.reviewModule(newReview);
        createdReview.userId=idUser;
        let bcId=await this.bcService.getBCId(bcName);
        createdReview.borderCrossId=bcId;
        createdReview.dateAndTime=new Date();
        return createdReview.save();
    }
    async getPersonalReviews(idUser:number)
    {
        const reviews=await this.reviewModule.find({userId:idUser});
        return reviews;
    }
    async getReviewsByBC(idBC:number)
    {
        const reviews=await this.reviewModule.find({borderCrossId:idBC});
        return reviews;
    }
    async getNotVerifiedReviews()
    {
        const reviews=await this.reviewModule.find({status:false});
        return reviews;
    }
    async verifyReview(idReview:number,answer:boolean)
    {
        const review=await this.reviewModule.findOne({id:idReview});
        if(answer==true)
        {
            review.status=true;
        }
        else{
            review.deleteOne();
            await this.notService.addNotification('Vasa recenzija je obrisana jer ne ispunjava prethodno propisane standarde',review.userId,undefined);
        }
    }
}
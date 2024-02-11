import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ReviewService } from "./review.service";
import { IReview } from "./review.interface";

@Controller('Review')
export class ReviewController{
    constructor(private readonly reviewService:ReviewService){}
    
    @Post('addReview/:idUser/:bcName')
    async addReview(@Body() newReview:IReview,@Param('idUser') idUser:number, @Param('bcName') bcName:string)
    {
        return await this.reviewService.addReview(newReview,idUser,bcName);
    }
    @Get('getPersonalReviews/:idUser')
    async getPersonalReviews(@Param('idUser') idUser:number)
    {
        return await this.reviewService.getPersonalReviews(idUser);
    }
    @Get('getReviewsByBC/:bcname')
    async getReviewsByBC(@Param('bcname') bcname:string)
    {
        return await this.reviewService.getReviewsByBC(bcname);
    }
    @Get('getNotVerifiedReviews')
    async getNotVerifiedReviews()
    {
        return await this.reviewService.getNotVerifiedReviews();
    }
    @Patch('verifyReview/:idReview/:answer')
    async verifyReview(@Param('idReview') idReview:number,@Param('answer') answer:string)
    {
        return await this.reviewService.verifyReview(idReview,answer);
    }
    @Patch('likeReview/:idReview')
    async likeReview(@Param('idReview') idReview:number)
    {
        return await this.reviewService.likeReview(idReview);
    }
    


}
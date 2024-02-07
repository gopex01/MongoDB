import { Controller } from "@nestjs/common";
import { ReviewService } from "./review.service";

@Controller('Review')
export class ReviewController{
    constructor(private readonly reviewService:ReviewService){}
    
}
import { Body, Controller, Post } from "@nestjs/common";
import { BorderCrossService } from "./bc.service";
import { BorderCrossEntity } from "./bc.entity";

@Controller('BorderCross')
export class BorderCrossController{
    constructor(private readonly bcService:BorderCrossService){}

    @Post('addBC')
    async addBC(@Body() input:BorderCrossEntity)
    {
        return await this.bcService.addBc(input);
    }
}
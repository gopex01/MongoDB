import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TermService } from "./term.service";
import { TermEntity } from "./term.schema";
import { ITerm } from "./term.interface";

@Controller('Term')
export class TermController{
    constructor(private readonly termService:TermService){}

    @Post('addTerm/:idUser/:bcName')
    async addTerm(@Body() newTerm:ITerm,@Param('idUser') idUser:number, @Param('bcName') bcName:string)
    {
        return await this.termService.addTerm(newTerm,idUser,bcName);
    }
    @Get('getTerm/:numpass')
    async getTerm(@Param('numpass') numpass:number)
    {
        return await this.termService.getTerm(numpass);
    }
    @Get('getTermsOfUser/:userId')
    async getTermsOfUser(@Param('userId') userId:number)
    {
        return await this.termService.getTermsOfUser(userId);
    }
}
import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
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
    @Get('getTerms/:username')
    async getTerm(@Param('username') username:string)
    {
        return await this.termService.getTermsOfBC(username);
    }
    @Get('getTermsOfUser/:userId')
    async getTermsOfUser(@Param('userId') userId:number)
    {
        return await this.termService.getTermsOfUser(userId);
    }
    @Get('getAcceptedTerms/:userId')
    async getAcceptedTerms(@Param('userId') userId:number)
    {
        return await this.termService.getAcceptedTerms(userId);
    }

    @Get('getNumOfTerms')
    async getNumOfTerms()
    {
        return await this.termService.getNumOfTerms();
    }
    @Patch('acceptTerm/:idNotification/:answer')
    async acceptTerm(@Param('idNotification') idNot:number, @Param('answer') answer:boolean)
    {
        return await this.termService.acceptTerm(idNot,answer);
    }

}
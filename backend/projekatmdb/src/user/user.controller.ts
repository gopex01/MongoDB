import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { IUser } from "./user.interface";

@Controller('user')
export class UserController{
    
    constructor(private readonly userService:UserService){}

    @Post('addUser')
    async addUser(@Body() newUser:IUser)
    {
        return await this.userService.addUser(newUser);
    }
    @Get('getAllUsers')
    async getAllUsers()
    {
        return await this.userService.findAllUsers();
    }
}
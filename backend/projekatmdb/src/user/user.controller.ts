import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";

@Controller('user')
export class UserController{
    constructor(private readonly userService:UserService){}

    @Post('addUser')
    async addUser(@Body() newUser:UserEntity)
    {
        return await this.userService.addUser(newUser);
    }

}
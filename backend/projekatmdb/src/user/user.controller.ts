import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";
import { JwtAuthGuard } from "src/Auth/jwt-auth.guard";
import { AdminGuard } from "src/Auth/admin.role.guard";
import { UserGuard } from "src/Auth/user.role.guard";

@Controller('user')
export class UserController{
    constructor(private readonly userService:UserService){}

    @Post('addUser')
    async addUser(@Body() newUser:UserEntity)
    {
        return await this.userService.addUser(newUser);
    }

    @UseGuards(JwtAuthGuard,AdminGuard)
    @Get('getAllUsers')
    async getAllUsers()
    {
        return this.userService.getAllUsers();
    }

    @Get('verifyAccount/:userName')
    async verifyAccount(@Param('userName')userName: string)
    {
        return this.userService.verifyAccount(userName);
    }

    @UseGuards(JwtAuthGuard,UserGuard)
    @Get('getOneUser/:username')
    async getOneUser(@Param('username')user: string)
    {
        return this.userService.getOneUser(user);
    }
    @UseGuards(JwtAuthGuard,UserGuard)
    @Patch('updateEmail/:newEmail/:userName')
    async updateEmail(@Param('newEmail') newEmail:string, @Param('userName') userName:string)
    {
        return this.userService.updateEmail(newEmail,userName);
    }

    @UseGuards(JwtAuthGuard,UserGuard)
    @Patch('updatePassword/:newPassword/:userName')
    async updatePassword(@Param('newPassword') newPassword:string, @Param('userName') userName:string)
    {
        return this.userService.updatePassword(newPassword,userName);
    }

    @UseGuards(JwtAuthGuard,UserGuard)
    @Patch('updatePhoneNumber/:newPhoneNumber/:userName')
    async updatePhoneNumber(@Param('newPhoneNumber') newPhoneNumber:string, @Param('userName') userName:string)
    {
        return this.userService.updatePhoneNumber(newPhoneNumber,userName);
    }

    @UseGuards(JwtAuthGuard,UserGuard)
    @Patch('updateUserName/:newUserName/:userName')
    async updateUserName(@Param('newUserName') newUserName:string, @Param('userName') userName:string)
    {
        return this.userService.updateUserName(newUserName,userName);
    }
    @UseGuards(JwtAuthGuard,UserGuard)
    @Patch('updateName/:newName/:userName')
    async updateName(@Param('newName') newName:string, @Param('userName') userName:string)
    {
        return this.userService.updateName(newName,userName);
    }
    @UseGuards(JwtAuthGuard,AdminGuard)
    @Get('getNumOfUsers')
    async getNumOfUsers()
    {
        return this.userService.getNumOfUsers();
    }
    @UseGuards(JwtAuthGuard,UserGuard)
    @Delete('deactivateAccount/:username/:password')
    async deactivateAccount(@Param('username') username:string,@Param('password') password:string)
    {
        return this.userService.deactivateAccount(username,password);
    }

}
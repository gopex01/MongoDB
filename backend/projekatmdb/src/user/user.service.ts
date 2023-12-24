import { InjectModel } from "@nestjs/mongoose";
import { UserEntity } from "./user.schema";
import { Model,Document } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { IUser, IUserDocument } from "./user.interface";
@Injectable()
export class UserService{
    constructor(@InjectModel('User') private userModel=Model<Document> as Model<IUserDocument>){}

    async addUser(newUser:IUser):Promise<IUser>
    {

        const createdUser=new this.userModel(newUser);
        return createdUser.save();
    }

    async findAllUsers():Promise<UserEntity[]>{
        return this.userModel.find().exec();
    }
}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserService{
    constructor(@InjectRepository(UserEntity) private readonly userRepo:Repository<UserEntity>){}

    async addUser(newUser:UserEntity)
    {
        const user:UserEntity={...newUser};
        await this.userRepo.save(user);
    }
}

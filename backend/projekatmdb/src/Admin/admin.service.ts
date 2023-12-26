import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdminEntity } from "./admin.entity";
import { Admin, Repository } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { Role } from "src/Roles/roles.enum";
@Injectable()
export class AdminService{

    constructor(@InjectRepository(AdminEntity) private adminRepository:Repository<AdminEntity>){}  
    async addAdmin(input:AdminEntity)
    {
        const admin:AdminEntity={...input};
        if(!admin){
            return {
                message:'Error'
            }
        }
        try{
            const hashPass=await bcrypt.hash(input.password,10);
            admin.password=hashPass;
            admin.rola=Role.Admin;
            await this.adminRepository.save(admin);
        }
        catch(error){
            if(error.code='23505')
        {
            const constraint = error.detail.match(/\((.*?)\)/); 
            if (constraint) {
              const columns = constraint[1].split(', ');
             
              return `User with ${columns.join(', ')} is already exist `
            }
            return error;
        }
        }
    }   
    async getAdmin(username:string)
    {
        return await this.adminRepository.findOne({where:{username:username}});
    }
}
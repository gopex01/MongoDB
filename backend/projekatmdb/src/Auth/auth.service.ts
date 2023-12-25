import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "src/User/user.entity";
import { UserService } from "src/User/user.service";
import * as bcrypt from 'bcryptjs';
import { BorderCrossEntity } from "src/BorderCross/bc.entity";
import { BorderCrossService } from "src/BorderCross/bc.service";
import { AdminService } from "src/Admin/admin.service";
import { AdminEntity } from "src/Admin/admin.entity";
@Injectable()
export class AuthService{
    constructor(private userService:UserService,private bcService:BorderCrossService,private adminService:AdminService,
        private jwtService:JwtService){}

    async validateUser(username:string,pass:string):Promise<any>{
        let user:UserEntity|BorderCrossEntity|any=await this.userService.getOneUser(username);
        if(user){
            const isMatchs=await bcrypt.compare(pass,user.password);
            if(isMatchs){
            if(user.verified===true){
            const { password, ...result}=user;
            return result;
            }
            }
        }
        else{
            user=await this.bcService.getBCByUsername(username);
            if(user){
            const isMatchs=await bcrypt.compare(pass,user.password);
            if(isMatchs)
            {
                const {password,...result}=user;
                return result;
            }
        }
        else{  
            user=await this.adminService.getAdmin(username);
            if(user){
                const isMatchc=await bcrypt.compare(pass,user.password);
                if(isMatchc)
                {
                    const {password,...result}=user;
                    return result;
                }
            }
        }
        }
        return null;
    }
    

    async login(user:any){
        console.log(user.rola)
        const payload={user:user.username,sub:user.id,role:user.rola};
        
        return {
            access_token:this.jwtService.sign(payload),
            username:user.username,
            rola:user.rola
        };
    }
}
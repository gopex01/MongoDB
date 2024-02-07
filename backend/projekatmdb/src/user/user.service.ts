import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import * as bcrypt from 'bcryptjs';
import * as nodemailer from 'nodemailer';
import { Role } from "src/Roles/roles.enum";
@Injectable()
export class UserService{

    private transporter;
    constructor(@InjectRepository(UserEntity) private readonly userRepo:Repository<UserEntity>)
    {
        this.transporter = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
              user: 'gopex2001@gmail.com', 
              pass: 'fzau shuu mvdm jcgx', 
            },
            secure:true,
          });
    }

    async addUser(newUser:UserEntity)
    {
        const user:UserEntity={...newUser};
        if(!user){
            return {
                message:'Error'
            }
        }
        console.log(newUser);
        try{
            console.log('Pufla');
            const hashPass=await bcrypt.hash(newUser.password, 10);
            user.password=hashPass;
            console.log('Password je', user.password)
            user.rola=Role.User;
            user.verified=false;
            const user2 = await this.userRepo.save(user);
            console.log(user2);
            await this.sendVerificationEmail(newUser.username,newUser.email);
            return{
                message:'Success'
            }
        }
        catch(error){
            /*if(error.code='23505')
            {
                const constraint = error.detail.match(/\((.*?)\)/); 
                if (constraint) {
                  const columns = constraint[1].split(', ');
                 
                  return `User with ${columns.join(', ')} is already exist `
                }
                return error;
            }*/
            return error;
        }        
    }
    async getOneUser(user:string):Promise<UserEntity|null>
    {
        return await this.userRepo.findOne({where:{username:user}});
    }
    async getAllUsers():Promise<UserEntity[]>
    {
        return await this.userRepo.find();
    }
    async sendVerificationEmail(username:string,email:string)
    {
        const verificationLink = `http://localhost:3000/User/verifyAccount/${username}`;
        const mailOptions = {
          from: 'gopex2001@gmail.com', // Vaša e-adresa
          to: email,
          subject: 'Verifikacija e-adrese',
          text: `Kliknite na sledeći link da biste verifikovali svoju e-adresu: ${verificationLink}`
        };
    
        await this.transporter.sendMail(mailOptions);
    }
    async updateEmail(newEmail:string,userName:string){
        const user:UserEntity=await this.userRepo.findOne({where:{username:userName}});
        try{
            user.email=newEmail;
            await this.userRepo.save(user);
        }
        catch(error){
            if(error.code==='23505')
            {
                return 'User with this email is already exist'
            }
        }
    }
    async updatePassword(newPassword:string,userName:string){
        const user:UserEntity=await this.userRepo.findOne({where:{username:userName}});
        const hashNewPass=await bcrypt.hash(newPassword,10);
        user.password=hashNewPass;
        await this.userRepo.save(user);
        
    }
    async deactivateAccount(username:string,password:string)
    {
        const user=await this.userRepo.findOne({where:{username:username}});
        if(!user)
        {
            return {
                message:'error'
            }
        }
        const isMatchs=await bcrypt.compare(password,user.password);
        if(isMatchs)
        {
            this.userRepo.delete(user.id);
            return {
                message:'success'
            }
        }
        else{
            return{
                message:'error'
            }
        }

    }
    async updatePhoneNumber(newPhoneNumber:string,userName:string){
        const user:UserEntity=await this.userRepo.findOne({where:{username:userName}});
        try{
            user.phoneNumber=newPhoneNumber;
            await this.userRepo.save(user);
            return {
                message:'success'
            }
        }
        catch(error){
            if(error.code=='23505')
            {
                return 'User with this phone number is already exist'
            }
        }
    }
    async updateUserName(newUserName:string,userName:string){
        const user:UserEntity=await this.userRepo.findOne({where:{username:userName}});
        try{
            user.username=newUserName;
            await this.userRepo.save(user);
        }
        catch(error){
            if(error.code=='23505')
            {
                return 'User with this username is already exist';
            }
        }
    }
    async verifyAccount(username:string)
    {
        const user:UserEntity=await this.userRepo.findOne({where:{username:username}});
        if(!user)
        {
            return Error;
        }
        user.verified=true;
        await this.userRepo.save(user);
        return "You have successfully verified your account";
    }
    async updateName(newName:string,userName:string){
        const user:UserEntity=await this.userRepo.findOne({where:{username:userName}});
            user.nameAndSurname=newName;
            await this.userRepo.save(user);
        
       
    }
    async getNumOfUsers()
    {
        const users=await this.userRepo.find();
        return users.length;
    }
}

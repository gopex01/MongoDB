import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BorderCrossEntity } from './bc.entity';
import { Repository } from 'typeorm';
import { TermEntity } from 'src/Term/term.schema';
import { NotificationService } from 'src/Notification/notifications.service';
import * as bcrypt from 'bcryptjs';
import { Role } from 'src/Roles/roles.enum';
import { InjectModel } from '@nestjs/mongoose';
import { Model,Document } from 'mongoose';
import { ITerm, ITermDocument } from 'src/Term/term.interface';
import { INotification, INotificationDocument } from 'src/Notification/notification.interface';
import { TermService } from 'src/Term/term.service';

@Injectable()
export class BorderCrossService {
  constructor( @InjectModel('Term')
  private termModule = Model<Document> as Model<ITermDocument>,
    @InjectRepository(BorderCrossEntity)
    private borderCrossRepository: Repository<BorderCrossEntity>,
    @Inject(NotificationService)
    private readonly notService:NotificationService
  ) {}

  async addBc(newBC: BorderCrossEntity) {
    const bc: BorderCrossEntity = { ...newBC };
    if(!bc)
    {
      return {
        message:'Error'
      }
    }
    try{
      const hashPass=await bcrypt.hash(newBC.password,10);
      bc.password=hashPass;
      bc.rola=Role.BorderCross;
      await this.borderCrossRepository.save(bc);
      return {
        message:'Success'
      }
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
  async getBCId(name: string) {
    const bc: BorderCrossEntity = await this.borderCrossRepository.findOne({
      where: { name: name },
    });
    if (bc) {
      return await bc.Id;
    } else {
      return null;
    }
  }
  async getOneBC(username: string): Promise<BorderCrossEntity | null> {
    const borderCross: BorderCrossEntity =
      await this.borderCrossRepository.findOne({
        where: { username: username },
      });

    return borderCross;
  }
  async getBCByName(name: string): Promise<BorderCrossEntity | null> {
    const borderCross: BorderCrossEntity =
      await this.borderCrossRepository.findOne({ where: { name: name } });
    return borderCross;
  }
  async getAllBC(): Promise<BorderCrossEntity[] | null> {
    return await this.borderCrossRepository.find();
  }
  async getBCByUsername(username: string) {
    return this.borderCrossRepository.findOne({
      where: { username: username },
    });
  }
  async checkTerm(idTerm:number,isCrossed:string,isComeBack:string,irreg:string)
   {
       if(isCrossed=='Yes' || isComeBack=='Yes')
       {
           let term:TermEntity=await this.termModule.findOne({id:idTerm});
           let content="";
           if(isCrossed=='Yes')
           {
               content=`Uspesno ste presli granicu! Stanje vaseg zahteva pod rednim brojem ${idTerm} je azurirano`;
           }
           if(isComeBack=='Yes'){
               content=`Uspesno ste presli granicu i vratili se u svoju drzavu,Dobrodosli! Stanje vaseg zahteva pod rednim brojem ${idTerm} je azurirano.`;
           }
           this.notService.addNotification(content,term.userId,idTerm);
       }
       const term=await this.termModule.findOne({id:idTerm});
       if(!term){
           return {
               message:'error'
           }
       }
       console.log(isCrossed);
       console.log(isComeBack);
       if(term.isCrossed)
       {
           if(isComeBack=='Yes'){
               term.isComeBack=true;
           }
           if(isComeBack=='No')
           {
               term.isComeBack=false;
           }
       }
       else{
           if(isCrossed=='Yes')
           {
               term.isCrossed=true;
           }
           if(isCrossed=='No')
           {
               term.isCrossed=false;
           }
           if(isComeBack=='Yes'){
               term.isComeBack=true;
           }
           if(isComeBack=='No')
           {
               term.isComeBack=false;
           }
       }
       term.irregularities=irreg;
       let updatedTerm:ITerm=new this.termModule(term);
       await updatedTerm.save();
       return {
        message:'success'
       }
   }
  async getNumOfBC() {
    const bc = await this.borderCrossRepository.find();
    return bc.length;
  }
  async deleteBC(name: string) {
    console.log(name);
    const bc = await this.borderCrossRepository.findOne({
      where: { name: name },
    });

    if (!bc) {
      return {
        message: 'error',
      };
    }
    await this.borderCrossRepository.delete(bc.Id);
    return {
      message: 'success',
    };
  }
}

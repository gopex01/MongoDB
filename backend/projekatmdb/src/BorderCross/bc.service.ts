import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BorderCrossEntity } from './bc.entity';
import { Repository } from 'typeorm';
import { TermEntity } from 'src/Term/term.schema';
import { NotificationService } from 'src/Notification/notifications.service';

@Injectable()
export class BorderCrossService {
  constructor(
    @InjectRepository(BorderCrossEntity)
    private borderCrossRepository: Repository<BorderCrossEntity>,
  ) {}

  async addBc(newBC: BorderCrossEntity) {
    const bc: BorderCrossEntity = { ...newBC };
    await this.borderCrossRepository.save(bc);
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
  // async accessBC(Name:string, AccessPassword:string){
  //     const BC=await this.getOneBC(Name);
  //     if(BC.Password==AccessPassword)
  //     {
  //         return {
  //             message:'sucess',
  //             BC
  //         }
  //     }
  //     else{
  //         message:'Password is incorect'
  //     }
  // }
  async getBCByUsername(username: string) {
    return this.borderCrossRepository.findOne({
      where: { username: username },
    });
  }
  // async checkTerm(idTerm:number,isCrossed:string,isComeBack:string,irreg:string)
  // {
  //     if(isCrossed=='Yes' || isComeBack=='Yes')
  //     {
  //         let term:TermEntity=await this.termRepo.findOne({where:{id:idTerm}, relations: {user: true}});
  //         //let newNotification:NotificationEntity=new NotificationEntity();
  //         let content="";
  //         if(isCrossed=='Yes')
  //         {
  //             content=`Uspesno ste presli granicu! Stanje vaseg zahteva pod rednim brojem ${idTerm} je azurirano`;
  //         }
  //         if(isComeBack=='Yes'){
  //             content=`Uspesno ste presli granicu i vratili se u svoju drzavu,Dobrodosli! Stanje vaseg zahteva pod rednim brojem ${idTerm} je azurirano.`;
  //         }
  //         this.noService.addNotification(content,term.user.Username,idTerm);//ovamo je problem
  //     }
  //     const term=await this.termRepo.findOne({where:{Id:idTerm}});
  //     if(!term){
  //         return {
  //             message:'error'
  //         }
  //     }
  //     console.log(isCrossed);
  //     console.log(isComeBack);
  //     if(term.IsCrossed)
  //     {
  //         if(isComeBack=='Yes'){
  //             term.IsComeBack=true;
  //         }
  //         if(isComeBack=='No')
  //         {
  //             term.IsComeBack=false;
  //         }
  //     }
  //     else{
  //         if(isCrossed=='Yes')
  //         {
  //             term.IsCrossed=true;
  //         }
  //         if(isCrossed=='No')
  //         {
  //             term.IsCrossed=false;
  //         }
  //         if(isComeBack=='Yes'){
  //             term.IsComeBack=true;
  //         }
  //         if(isComeBack=='No')
  //         {
  //             term.IsComeBack=false;
  //         }
  //     }
  //     term.Irregularities=irreg;
  //     this.termRepo.save(term);
  // }
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

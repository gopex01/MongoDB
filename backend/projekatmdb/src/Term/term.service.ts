import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ITerm, ITermDocument } from './term.interface';
import { Model, Document } from 'mongoose';
import { BorderCrossService } from 'src/BorderCross/bc.service';
import { TermEntity } from './term.schema';
import { INotification, INotificationDocument } from 'src/Notification/notification.interface';
import { create } from 'domain';
import { NotificationService } from 'src/Notification/notifications.service';

@Injectable()
export class TermService {
  constructor(
    @InjectModel('Term')
    private termModule = Model<Document> as Model<ITermDocument>,
    @Inject(BorderCrossService)
    private readonly bcService: BorderCrossService,
    @InjectModel('Notification') private notModule=Model<Document> as Model<INotificationDocument>,
    @Inject(NotificationService) private readonly notService:NotificationService
  ) {}

  async addTerm(
    newTerm: ITerm,
    idUser: number,
    bcName: string,
  ): Promise<ITerm> {
    const createdTerm: ITerm = new this.termModule(newTerm);
    createdTerm.userId = idUser;
    createdTerm.accepted=false;
    let bcId = await this.bcService.getBCId(bcName);
    createdTerm.borderCrossId = bcId;
    const selectedDate=newTerm.dateAndTime;
    const time=await this.findNextAvailableTerm(selectedDate);
    console.log("Novo vreme je "+time);
    createdTerm.dateAndTime=time;
    await this.notService.addNotification(`Uspesno ste zakazali termin u vremenu:${time}`,idUser,createdTerm.id);
    return createdTerm.save();
  }
  async getTerm(idTerm:number) {
    const term = await this.termModule.findOne({ id:idTerm });
    return term;
  }
  async getTermsOfUser(userId: number) {
    const terms = await this.termModule.find({ userId: userId });
    if (!terms) return null;
    return terms;
  }
  async getTermsOfBC(bcName: string) {
    return await this.termModule.find({ Name: bcName });
  }
  async findNextAvailableTerm(selectedDate: Date): Promise<Date> {
    if (!(selectedDate instanceof Date)) {
      selectedDate = new Date(selectedDate);
    }
  
 
    selectedDate.setHours(0, 0, 0, 0);
  
    const overlappingTerms: TermEntity[] = await this.termModule
    .find({
      dateAndTime: {
        $gte: new Date(selectedDate),
        $lt: new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000),
      },
    })
    .sort({ dateAndTime: 'asc' })
    .exec();
    console.log(overlappingTerms);
    
    let nextAvailableDate = new Date(selectedDate);
    console.log("Zadnji dostupni termin je",nextAvailableDate);
  
   
    while (overlappingTerms.some(term => term.dateAndTime && term.dateAndTime.getTime() === nextAvailableDate.getTime())) {
      nextAvailableDate = new Date(nextAvailableDate.getTime() + 30 * 60 * 1000); 
    }
  
  
    if (nextAvailableDate.getHours() >= 23 && nextAvailableDate.getMinutes() >= 30) {
      nextAvailableDate.setDate(nextAvailableDate.getDate() + 1);
      nextAvailableDate.setHours(0, 0, 0, 0);
    }
  
    return nextAvailableDate;
  }
  
  async getAcceptedTerms(userId:number)
  {
      const terms=await this.termModule.find({userId:userId});
      const result=[];
      terms.forEach(term=>{
        if(term.accepted==true)
        {
          result.push(term);
        }
      })
      return await terms;
  }
  async getNumOfTerms()
  {
    const terms=await this.termModule.find();
    return terms.length;
  }
  //dodaj accept term
  async acceptTerm(idNotification:number,answer:boolean)
  {
    const not=await this.notModule.findOne({id:idNotification});
    console.log(not);
    const term=await this.termModule.findOne({id:not.idTerm});
    console.log(not);
    console.log(term);
    term.accepted=answer;
    const changedTerm:ITerm=new this.termModule(term);
    changedTerm.save();
    return {
      message:'success'
    }

  }
}

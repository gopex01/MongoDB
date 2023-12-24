import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ITerm, ITermDocument } from './term.interface';
import { Model, Document } from 'mongoose';
import { BorderCrossService } from 'src/BorderCross/bc.service';

@Injectable()
export class TermService {
  constructor(
    @InjectModel('Term')
    private termModule = Model<Document> as Model<ITermDocument>,
    private readonly bcService: BorderCrossService,
  ) {}

  async addTerm(
    newTerm: ITerm,
    idUser: number,
    bcName: string,
  ): Promise<ITerm> {
    const createdTerm: ITerm = new this.termModule(newTerm);
    createdTerm.userId = idUser;
    let bcId = await this.bcService.getBCId(bcName);
    createdTerm.borderCrossId = bcId;
    return createdTerm.save();
  }
  async getTerm(numPass: number) {
    const term = await this.termModule.findOne({ numOfPassangers: numPass });
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
}

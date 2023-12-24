import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BorderCrossEntity } from "./bc.entity";
import { Repository } from "typeorm";

@Injectable()
export class BorderCrossService{
    
    constructor(@InjectRepository(BorderCrossEntity) private bcRepo:Repository<BorderCrossEntity>){}

    async addBc(newBC:BorderCrossEntity)
    {
        const bc:BorderCrossEntity={...newBC};
        await this.bcRepo.save(bc);
    }
    async getBCId(name:string)
    {
        const bc:BorderCrossEntity=await this.bcRepo.findOne({where:{Name:name}});
        if(bc)
        {
            return await bc.Id;
        }
        else{
            return null;
        }
    }
}
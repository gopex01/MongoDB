import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BorderCrossService } from './bc.service';
import { BorderCrossEntity } from './bc.entity';

@Controller('BorderCross')
export class BorderCrossController {
  constructor(private readonly bcService: BorderCrossService) {}

  @Post('addBC')
  async addBC(@Body() input: BorderCrossEntity) {
    return await this.bcService.addBc(input);
  }
  @Get('getAllBC')
  async getAllBC()
  {
    return await this.bcService.getAllBC();
  }
  @Get('getOneBC/:username')
  async getOneBC(@Param('username') username: string) {
    return this.bcService.getBCByUsername(username);
  }
   @Patch('checkTerm/:idTerm/:isCrossed/:isComeBack/:irreg')
   async checkTerm(
     @Param('idTerm') idTerm: number,
     @Param('isCrossed') isCrossed: string,
     @Param('isComeBack') isComeBack: string,
     @Param('irreg') irreg: string,
   ) {
     return this.bcService.checkTerm(idTerm, isCrossed, isComeBack, irreg);
   }
  @Get('getNumOfBC')
  async getNumOfBC() {
    return this.bcService.getNumOfBC();
  }

  @Delete('deleteBC/:name')
  async deleteBC(@Param('name') name: string) {
    const namedec = decodeURIComponent(name);
    console.log(name);
    return this.bcService.deleteBC(namedec);
  }
}
